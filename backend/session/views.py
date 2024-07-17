from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .models import Message, Session
from .serializer import SessionSerializer, MessageSerializer

# Create your views here.
class SendMessage(CreateAPIView):
    queryset = Message.objects.all()
    serializer_class=MessageSerializer
    
class CreateSession(CreateAPIView):
    queryset = Session.objects.all()
    serializer_class=SessionSerializer