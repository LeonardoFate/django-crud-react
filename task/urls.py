from django.urls import path, include
from rest_framework import routers
from task import views
#api versioning
router = routers.DefaultRouter()
router.register(r'task', views.TaskView, 'task')

urlpatterns =[
    path("api/v1/", include(router.urls))
]

