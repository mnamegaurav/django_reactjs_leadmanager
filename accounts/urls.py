from django.urls import path, include
from accounts.views import RegisterAPI, LoginAPI, UserAPI
# from knox.views import 


urlpatterns = [
    # api/auth/login/ 
    # api/auth/logout/
    # api/auth/logoutall/
    path('api/auth/', include('knox.urls')),

    path('api/auth/register/', RegisterAPI.as_view()),
    path('api/auth/login_view/', LoginAPI.as_view()),
    path('api/auth/user/', UserAPI.as_view()),
]