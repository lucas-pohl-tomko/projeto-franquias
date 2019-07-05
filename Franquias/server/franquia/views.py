from rest_framework import viewsets
from franquia.models import *
from franquia.serializers import *

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

class User_FranqViewSet(viewsets.ModelViewSet):
    queryset = Assoc_Usuarios_Franquias.objects.all()
    serializer_class = User_FranqSerializer