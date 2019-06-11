from rest_framework import viewsets
from franquia.models import Franquia, Loja, Empregado, Usuario
from franquia.serializers import FranquiaSerializer, LojaSerializer,EmpregadoSerializer, UserSerializer

class FranquiaViewSet(viewsets.ModelViewSet):
    queryset = Franquia.objects.all()
    serializer_class = FranquiaSerializer


class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    serializer_class = LojaSerializer


class EmpregadoViewSet(viewsets.ModelViewSet):
    queryset = Empregado.objects.all()
    serializer_class = EmpregadoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer