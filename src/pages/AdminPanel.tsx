// Panel de Administración (CMS)
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { logoutUser } from '../lib/firebaseAuth';
import { 
  getProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct,
  getOrders,
  Product,
  Order 
} from '../lib/firebaseDb';
import { uploadImage } from '../lib/firebaseStorage';
import { toast } from 'sonner@2.0.3';
import { 
  Package, 
  ShoppingBag, 
  Plus, 
  Edit2, 
  Trash2, 
  LogOut,
  Upload,
  X
} from 'lucide-react';

export default function AdminPanel() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: 'toppers' as 'toppers' | 'troquelados' | 'archivos',
    subcategory: '',
    stock: 0,
    featured: false,
    images: [] as string[]
  });

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/login');
    }
  }, [authLoading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin, activeTab]);

  const loadData = async () => {
    setLoading(true);
    if (activeTab === 'products') {
      const result = await getProducts();
      if (result.success) {
        setProducts(result.products);
      }
    } else {
      const result = await getOrders();
      if (result.success) {
        setOrders(result.orders);
      }
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await logoutUser();
    toast.success('Sesión cerrada');
    navigate('/');
  };

  const openProductModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        subcategory: product.subcategory || '',
        stock: product.stock,
        featured: product.featured,
        images: product.images || []
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        description: '',
        price: 0,
        category: 'toppers',
        subcategory: '',
        stock: 0,
        featured: false,
        images: []
      });
    }
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      category: 'toppers',
      subcategory: '',
      stock: 0,
      featured: false,
      images: []
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);
    const newImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const path = `products/${Date.now()}_${file.name}`;
      const result = await uploadImage(file, path);
      
      if (result.success && result.url) {
        newImages.push(result.url);
      } else {
        toast.error('Error al subir imagen');
      }
    }

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
    setUploadingImage(false);
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      subcategory: formData.subcategory,
      stock: Number(formData.stock),
      featured: formData.featured,
      images: formData.images
    };

    let result;
    if (editingProduct) {
      result = await updateProduct(editingProduct.id!, productData);
    } else {
      result = await addProduct(productData);
    }

    if (result.success) {
      toast.success(editingProduct ? 'Producto actualizado' : 'Producto creado');
      closeProductModal();
      loadData();
    } else {
      toast.error('Error al guardar producto');
    }

    setLoading(false);
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;

    const result = await deleteProduct(id);
    if (result.success) {
      toast.success('Producto eliminado');
      loadData();
    } else {
      toast.error('Error al eliminar producto');
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Nunito'] font-bold text-[28px] sm:text-[36px] text-[#ec268f]">
                Panel de Administración
              </h1>
              <p className="font-['Inter'] text-[14px] text-gray-600">
                Bienvenido, {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-['Inter'] font-medium px-4 py-2 rounded-[12px] transition-colors"
            >
              <LogOut size={18} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 font-['Nunito'] font-semibold text-[18px] py-4 border-b-2 transition-colors ${
                activeTab === 'products'
                  ? 'border-[#ec268f] text-[#ec268f]'
                  : 'border-transparent text-gray-600 hover:text-[#ec268f]'
              }`}
            >
              <Package size={20} />
              Productos
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 font-['Nunito'] font-semibold text-[18px] py-4 border-b-2 transition-colors ${
                activeTab === 'orders'
                  ? 'border-[#ec268f] text-[#ec268f]'
                  : 'border-transparent text-gray-600 hover:text-[#ec268f]'
              }`}
            >
              <ShoppingBag size={20} />
              Pedidos
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8">
        {activeTab === 'products' ? (
          <div>
            {/* Products Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Nunito'] font-bold text-[24px] text-black">
                Gestión de Productos
              </h2>
              <button
                onClick={() => openProductModal()}
                className="flex items-center gap-2 bg-[#ec268f] hover:bg-[#d61f7a] text-white font-['Nunito'] font-semibold px-6 py-3 rounded-[12px] transition-colors"
              >
                <Plus size={20} />
                Nuevo Producto
              </button>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[18px]">
                <div className="text-[60px] mb-4">📦</div>
                <p className="font-['Inter'] text-[18px] text-gray-600">
                  No hay productos. ¡Crea el primero!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-[18px] overflow-hidden shadow-lg">
                    <div className="aspect-square bg-[#f0cad5] relative">
                      {product.images && product.images[0] ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                          <span className="text-[48px]">📷</span>
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-2 right-2 bg-[#ec268f] text-white px-2 py-1 rounded-full text-[12px] font-semibold">
                          Destacado
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="font-['Inter'] text-[14px] text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-['Nunito'] font-bold text-[20px] text-[#ec268f]">
                          ${product.price.toLocaleString('es-CO')}
                        </span>
                        <span className="font-['Inter'] text-[14px] text-gray-600">
                          Stock: {product.stock}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openProductModal(product)}
                          className="flex-1 flex items-center justify-center gap-2 bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] font-['Inter'] font-medium py-2 rounded-[8px] transition-colors"
                        >
                          <Edit2 size={16} />
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id!)}
                          className="flex-1 flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 font-['Inter'] font-medium py-2 rounded-[8px] transition-colors"
                        >
                          <Trash2 size={16} />
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Orders Header */}
            <h2 className="font-['Nunito'] font-bold text-[24px] text-black mb-6">
              Pedidos Recibidos
            </h2>

            {/* Orders List */}
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[18px]">
                <div className="text-[60px] mb-4">🛍️</div>
                <p className="font-['Inter'] text-[18px] text-gray-600">
                  No hay pedidos aún
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-[18px] p-6 shadow-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-['Nunito'] font-bold text-[20px] text-black mb-1">
                          Pedido #{order.id?.slice(-8)}
                        </h3>
                        <p className="font-['Inter'] text-[14px] text-gray-600">
                          {order.customerInfo.name} • {order.customerInfo.email}
                        </p>
                        <p className="font-['Inter'] text-[14px] text-gray-600">
                          {order.customerInfo.phone}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-1">
                          ${order.total.toLocaleString('es-CO')}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-[14px] font-semibold ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'shipped' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {order.status === 'pending' ? 'Pendiente' :
                           order.status === 'processing' ? 'Procesando' :
                           order.status === 'shipped' ? 'Enviado' : 'Entregado'}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-['Nunito'] font-semibold text-[16px] text-black mb-3">
                        Productos:
                      </h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-[14px]">
                            <span className="font-['Inter'] text-gray-700">
                              {item.product.name} x{item.quantity}
                            </span>
                            <span className="font-['Inter'] font-semibold text-black">
                              ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-[24px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-[24px] flex items-center justify-between">
              <h2 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f]">
                {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
              </h2>
              <button
                onClick={closeProductModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmitProduct} className="p-6 space-y-6">
              <div>
                <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                  Nombre del Producto *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f]"
                  placeholder="Topper personalizado"
                />
              </div>

              <div>
                <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                  Descripción *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] resize-none"
                  placeholder="Descripción del producto..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Precio *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f]"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Stock *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f]"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Categoría *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f]"
                  >
                    <option value="toppers">Toppers</option>
                    <option value="troquelados">Troquelados</option>
                    <option value="archivos">Archivos</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Subcategoría
                  </label>
                  <input
                    type="text"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f]"
                    placeholder="personalizados, prediseñados..."
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="size-5 text-[#ec268f] rounded"
                  />
                  <span className="font-['Inter'] font-medium text-[16px] text-black">
                    Producto destacado
                  </span>
                </label>
              </div>

              <div>
                <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                  Imágenes
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative aspect-square bg-[#f0cad5] rounded-[12px] overflow-hidden">
                      <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <label className="block w-full border-2 border-dashed border-[#ec268f] rounded-[12px] p-6 text-center cursor-pointer hover:bg-[#f0cad5] transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Upload size={32} className="mx-auto mb-2 text-[#ec268f]" />
                  <p className="font-['Inter'] text-[14px] text-[#ec268f]">
                    {uploadingImage ? 'Subiendo...' : 'Subir imágenes'}
                  </p>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={closeProductModal}
                  className="flex-1 border-2 border-gray-300 text-gray-700 font-['Nunito'] font-semibold text-[18px] py-3 rounded-[12px] transition-colors hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#ec268f] hover:bg-[#d61f7a] disabled:bg-gray-400 text-white font-['Nunito'] font-semibold text-[18px] py-3 rounded-[12px] transition-colors"
                >
                  {loading ? 'Guardando...' : editingProduct ? 'Actualizar' : 'Crear Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
