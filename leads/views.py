from django.shortcuts import render
from rest_framework import viewsets, permissions

from leads.models import Lead
from leads.serializers import LeadSerializer
# Create your views here.

class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)