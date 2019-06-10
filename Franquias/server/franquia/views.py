from rest_framework import viewsets
from franquia.models import Franquia, Loja, Empregado
from franquia.serializers import FranquiaSerializer, LojaSerializer,EmpregadoSerializer

class FranquiaViewSet(viewsets.ModelViewSet):
    queryset = Franquia.objects.all()
    serializer_class = FranquiaSerializer


class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    serializer_class = LojaSerializer


class EmpregadoViewSet(viewsets.ModelViewSet):
    queryset = Empregado.objects.all()
    serializer_class = EmpregadoSerializer