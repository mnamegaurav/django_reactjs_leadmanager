from django.shortcuts import render
from rest_framework import viewsets, permissions

from leads.models import Lead
from leads.serializers import LeadSerializer
# Create your views here.

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer