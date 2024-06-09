
from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from todo.views import ToDoViewSet

router = DefaultRouter()
router.register('todo',ToDoViewSet,basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
