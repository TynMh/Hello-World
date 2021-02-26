from . import models
class HostXadmin(object):
    pass

import xadmin

xadmin.site.register(models.Hosts, HostXadmin)