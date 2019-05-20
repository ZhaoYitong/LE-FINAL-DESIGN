from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('vesselStruct/ves_basic/', views.ves_basic, name='ves_basic'),
    path('vesselStruct/page_not_found/', views.page_not_found, name='page_not_found'),
    path('vesselStruct/ves_struct_input/', views.ves_struct_input, name='ves_struct_input'),
    path('vesselStruct/edit_bay/', views.edit_bay, name='edit_bay'),
    path('vesselStruct/ves_struct/', views.create_ves_struct, name='create_ves_struct'),
    path('vesselStruct/con_pend_info/', views.get_con_pend_info, name='get_con_pend_info'),
    path('vesselStruct/test_connect_to_db/', views.test_connect_to_db, name='test_connect_to_db'),
    path('vesselStruct/test_creat_pend_info/', views.test_creat_pend_info, name='test_creat_pend_info'),
    path('vesselStruct/add_vessel/', views.add_vessel, name='add_vessel'),
    path('vesselStruct/define_bay/', views.define_bay, name='define_bay'),
]