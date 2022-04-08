function DanhSachSinhVien() {
  this.DSSV = [];
  this.ThemSinhVien = function (sv) {
    this.DSSV.push(sv);
  };
  this.XoaSinhVien = function (listMaSVXoa) {
    for (var i = 0; i < listMaSVXoa.length; i++) {
      for (var j = 0; j < this.DSSV.length; j++) {
        var sinhvien = this.DSSV[j];
        if (listMaSVXoa[i] == sinhvien.MaSV) {
          this.DSSV.splice(j, 1);
        }
      }
    }
  };
  this.SuaSinhVien = function (svCapNhat) {
    for (var i = 0; i < this.DSSV.length; i++) {
      var svHienTai = this.DSSV[i];
      if (svCapNhat.MaSV == svHienTai.MaSV) {
        svHienTai.HoTen = svCapNhat.HoTen;
        svHienTai.Email = svCapNhat.Email;
        svHienTai.Cmnd = svCapNhat.Cmnd;
        svHienTai.SoDT = svCapNhat.SoDT;
        svHienTai.Ly = svCapNhat.Ly;
        svHienTai.Toan = svCapNhat.Toan;
        svHienTai.Hoa = svCapNhat.Hoa;
        svHienTai.dtb = svCapNhat.dtb;
        svHienTai.Loai = svCapNhat.Loai;
      }
    }
  };
  this.TimKiemSinhVien = function (tukhoa)
    {
        //List kết quả tìm kiếm : DanhSachSinhVien
        var lstKetQuaTimKiem = new DanhSachSinhVien();
        for(var i=0 ; i< this.DSSV.length ; i++)
        {
            var sinhvien = this.DSSV[i];
            if(sinhvien.HoTen.search(tukhoa) != -1)
            {
                lstKetQuaTimKiem.ThemSinhVien(sinhvien);
                console.log(sinhvien)
            }
        }
        return lstKetQuaTimKiem;
    }
  this.TimSVTheoMa = function (masv) {
    for (var i = 0; i < this.DSSV.length; i++) {
      var sv = this.DSSV[i];

      if (sv.MaSV === masv) {
        return sv;
      }
    }
    return null;
  };
}
