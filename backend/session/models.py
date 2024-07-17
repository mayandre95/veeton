from django.db import models

# Create your models here.

class Session (models.Model):
    pass

class Message (models.Model):
    text = models.TextField()
    session = models.ForeignKey(Session,on_delete=models.CASCADE)


