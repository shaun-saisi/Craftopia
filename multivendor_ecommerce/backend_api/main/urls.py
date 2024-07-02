from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet, basename='customeraddress')
router.register('productrating', views.ProductRatingViewSet, basename='productrating')

urlpatterns = [
    path('vendors/', views.VendorList.as_view(), name='vendor-list'),
    path('vendor/<int:pk>/', views.VendorDetail.as_view(), name='vendor-detail'),
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('product/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    # Customer
    path('customers/', views.CustomerList.as_view(), name='customer-list'),
    path('customer/<int:pk>/', views.CustomerDetail.as_view(), name='customer-detail'),
    # Orders
    path('orders/', views.OrderList.as_view(), name='order-list'),
    path('order/<int:pk>/', views.OrderDetail.as_view(), name='order-detail'),
]

urlpatterns += router.urls
