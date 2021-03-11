from django.urls import path, include, re_path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    re_path(r'^login/', obtain_jwt_token),
    re_path(r'^verify/', refresh_jwt_token),    # refresh_jwt_token 校验token有效性，并刷新token
]