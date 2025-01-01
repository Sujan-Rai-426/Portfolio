
from django.urls import path

from Home import views

urlpatterns = [
    path('Project/', views.Project_View, name='Project' ),
    path('Frontend_Skill/', views.Frontend_Skill_View, name='Frontend_Skill' ),
    path('Backend_Skill/', views.Backend_Skill_View, name='Backend_Skill' ),
    path('CurrentAddress/', views.CurrentAddress_View, name='CurrentAddress' ),
]