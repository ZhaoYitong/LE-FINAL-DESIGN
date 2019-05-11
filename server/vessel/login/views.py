from django.shortcuts import render
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required


@csrf_exempt
def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    if(username=='wode2016zyt@outlook.com' and password=='wode2016'):
        return render(request, '404.html', {'user': request.user})
    else:
        return render(request, 'login.html')
    # user = auth.authenticate(username=username, password=password)
    # if request.POST:
    #     if user is not None and user.is_active:
    #         auth.login(request, user)
    #         return HttpResponseRedirect('/')
    #     else:
    #         return render(request, 'login.html')
    # else:
    #     return render(request, 'login.html')


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login/')


# @login_required
# def index(request):
#     return render(request, 'index.html', {'user': request.user})


