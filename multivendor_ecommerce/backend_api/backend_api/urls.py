"""
URL configuration for backend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    
    http post http://127.0.0.1:8000/api/token/ username=admin password=1697
    
    http http://127.0.0.1:8000/api/vendors/ "Authorization:Bearer 
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXh
    wIjoxNzE5ODE4NDc4LCJpYXQiOjE3MTk4MTgxNzgsImp0aSI6ImU4ZGI3MzAwZDNmMTQyMjV
    hYjc3Zjk0ZmQzOTEwZDMxIiwidXNlcl9pZCI6MX0.SUgpFG0I0oG15jb0Gs96_srHjXD
    StkG_b2qyNrAk8hk"
    
    http http://127.0.0.1:8000/api/token/refresh/ refresh=eyJhbGciOiJIUzI1Ni
    IsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxOTkwNDU3OC
    wiaWF0IjoxNzE5ODE4MTc4LCJqdGkiOiJkNWUzMTFiZjlmOWU0MGEwODZlNTVjNDA
    yM2UxOTMzMCIsInVzZXJfaWQiOjF9.DIvLwZTEt7DnLk3j4NgSiFRFJsI9nEhuMsX5HjWK-qM
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('main.urls')),
    path('api/token/',jwt_views.TokenObtainPairView.as_view(),name ='token_obtain_pair'),
    path('api/token/refresh',jwt_views.TokenRefreshView.as_view(),name ='token_refresh'),
    path('api-auth/',include('rest_framework.urls')),
]
