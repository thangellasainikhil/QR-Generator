import pyqrcode

def generate_qrcode(contents, filename):

    qrcode = pyqrcode.create(contents, error='L')
    qrcode.png('./static/qrcodes/'+filename+'.png')

    return True