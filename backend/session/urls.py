from django.urls import path
from .views import SendMessage, CreateSession

urlpatterns = [
    path('send/', SendMessage.as_view()),
    path('create/', CreateSession.as_view()),
    
]

