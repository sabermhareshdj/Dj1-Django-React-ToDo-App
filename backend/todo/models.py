from django.db import models
from django.utils import timezone

class ToDo(models.Model):
  title = models.CharField(max_length=100)
  status = models.CharField(max_length=30,choices=[('DONE','DONE'),('INPROGRESS','INPROGRESS')])
  create_at = models.DateTimeField(default=timezone.now)

  def __str__(self):
    return self.title

