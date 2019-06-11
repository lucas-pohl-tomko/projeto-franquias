from rest_framework import serializers
from django import forms
from franquia.models import Franquia, Loja, Empregado, Usuario
from django.contrib.auth.hashers import make_password


class FranquiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Franquia
        fields = ("id","nome", "descricao", "slogan", "data_fundacao", "site")

class LojaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loja
        fields = ("id",
            "franquia_id", "numero", "endereco", "data_abertura",
            "horario_comercial_inicio", "horario_comercial_fim"
        )

class EmpregadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empregado
        fields = ("id","loja_id", "numero_telefone", "nome", "sobrenome", "data_contrato")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        filds = ("id","nome","senha")
        
    def create(self, validated_data):
        user = Usuario.objects.create(
            nome=validated_data['nome'],
            senha = make_password(validated_data['senha'])
        )
        user.save()
        return user