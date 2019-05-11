from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ves_basic/', views.ves_basic, name='ves_basic'),
    path('page_not_found/', views.page_not_found, name='page_not_found'),
]