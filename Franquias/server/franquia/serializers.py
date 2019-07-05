from rest_framework import serializers
from django import forms
from franquia.models import *
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
        filds = ("id","franquia_id","nome","senha","admin")
        
    # def create(self, validated_data):
    #     user = Usuario.objects.create(
    #         nome=validated_data['nome'],
    #         admin=validated_data['admin'],
    #         senha = make_password(validated_data['senha'])
    #     )
    #     user.save()
    #     return user

class User_FranqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assoc_Usuarios_Franquias
        filds = ("id","franquia_id","usuario_id")