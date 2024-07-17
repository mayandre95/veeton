from rest_framework import serializers
from .models import Session, Message

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id','text','session']

