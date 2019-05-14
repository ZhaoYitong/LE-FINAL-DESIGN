from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('vesselStruct/ves_basic/', views.ves_basic, name='ves_basic'),
    path('vesselStruct/page_not_found/', views.page_not_found, name='page_not_found'),
    path('vesselStruct/test_connect_to_db/', views.test_connect_to_db, name='test_connect_to_db'),
    path('vesselStruct/ves_info_input/', views.ves_info_input, name='ves_info_input'),
]