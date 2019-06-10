from rest_framework import serializers
from franquia.models import Franquia, Loja, Empregado

class FranquiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Franquia
        fields = ("nome", "descricao", "slogan", "data_fundacao", "site")

class LojaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loja
        fields = (
            "franquia_id", "numero", "endereco", "data_abertura",
            "horario_comercial_inicio", "horario_comercial_fim"
        )

class EmpregadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empregado
        fields = ("loja_id", "numero_telefone", "nome", "sobrenome", "data_contrato")

