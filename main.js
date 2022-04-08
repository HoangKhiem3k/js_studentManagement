var danhSachSinhVien = new DanhSachSinhVien();
// GetStorage();
// var validate = new Validation();
function DomID(id)
{
    var element = document.getElementById(id);
    return element;
}
// Them sinh vien
function ThemSinhVien(){
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var sdt = DomID("sdt").value;
    var email = DomID("email").value;
    var toan = DomID("Toan").value;
    var ly = DomID("Ly").value;
    var hoa = DomID("Hoa").value;
    //Kiểm tra validation
    //Thêm sinh viên
    var sinhvien = new SinhVien(masv,hoten,cmnd,sdt,email,toan,ly,hoa);
    sinhvien.TinhDTB();
    sinhvien.XepLoai();
    danhSachSinhVien.ThemSinhVien(sinhvien);
    CapNhatDanhSachSV(danhSachSinhVien);
}
//Xóa sinh viên
function XoaSinhVien()
{
    //Mảng checkbox
    var listMaSV = document.getElementsByClassName("ckbMaSV");
    //Mảng mã sinh viên được chọn
    var listMaSVDuocChon = [];
    for(i = 0 ; i<listMaSV.length ;i++)
    {
        if(listMaSV[i].checked) //Kiểm phần tử checkbox đó có được chọn hay chưa
        {
            listMaSVDuocChon.push(listMaSV[i].value);
        }
    }
    danhSachSinhVien.XoaSinhVien(listMaSVDuocChon);
    CapNhatDanhSachSV(danhSachSinhVien);
}
// Cap nhat danh sach
function CapNhatDanhSachSV (DanhSachSinhVien)
{
    var listTableSV = DomID("tbodySinhVien");
    listTableSV.innerHTML = "";
    for(var i = 0; i <  DanhSachSinhVien.DSSV.length ; i++ )
    {
        //Lấy thông tin sinh viên từ trong mảng sinh viên
        var sv = danhSachSinhVien.DSSV[i];
        //Tạo thẻ tr
        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien";
        trSinhVien.setAttribute("onclick","ChinhSuaSinhVien('"+sv.MaSV+"')");
        //Tạo các thẻ td và filter dữ liệu sinh viên thứ [i] vào
        var tdCheckBox = document.createElement('td');
        var ckbMaSinhVien = document.createElement('input');
        ckbMaSinhVien.setAttribute("class","ckbMaSV");
        ckbMaSinhVien.setAttribute("type","checkbox");
        ckbMaSinhVien.setAttribute("value",sv.MaSV);
        tdCheckBox.appendChild(ckbMaSinhVien);

        var tdMaSV = TaoTheTD("MaSV",sv.MaSV);
        var tdHoTen = TaoTheTD("HoTen",sv.HoTen);
        var tdCMND = TaoTheTD("CMND",sv.Cmnd);
        var tdEmail = TaoTheTD("Email",sv.Email);
        var tdSoDT = TaoTheTD("SoDT",sv.SoDT);
        var tdToan = TaoTheTD("Toan",sv.Toan);
        var tdLy = TaoTheTD("Ly",sv.Ly);
        var tdHoa = TaoTheTD("Hoa",sv.Hoa);
        var tdDTB = TaoTheTD("DTB",sv.dtb);
        var tdXepLoai = TaoTheTD ("XepLoai",sv.Loai);

        //Append các td vào tr
        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSV);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdCMND);
        trSinhVien.appendChild(tdEmail);
        trSinhVien.appendChild(tdSoDT);
        trSinhVien.appendChild(tdToan);
        trSinhVien.appendChild(tdLy);
        trSinhVien.appendChild(tdHoa);
        trSinhVien.appendChild(tdDTB);
        trSinhVien.appendChild(tdXepLoai);

        //Append các tr vào tbodySinhVien
        listTableSV.appendChild(trSinhVien);
    }

}
// Tim kiem sinh vien theo ten
function TimKiemSinhVien()
{
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSinhVienTimKiem =
    danhSachSinhVien.TimKiemSinhVien(tukhoa);
    CapNhatDanhSachSV(lstDanhSachSinhVienTimKiem);
}
function TimSVTheoMa(){
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSinhVienTimKiem = danhSachSinhVien.TimSVTheoMa(tukhoa);
    CapNhatDanhSachSV(lstDanhSachSinhVienTimKiem);
}
function ChinhSuaSinhVien(masv)
{
   
    var sinhvien = danhSachSinhVien.TimSVTheoMa(masv);
    if(sinhvien!=null)
    {
        DomID("masv").value = sinhvien.MaSV;
        DomID("hoten").value = sinhvien.HoTen;
        DomID("cmnd").value = sinhvien.Cmnd;
        DomID("email").value = sinhvien.Email;
        DomID("sdt").value = sinhvien.SoDT;
        DomID("Toan").value = sinhvien.Toan;
        DomID("Ly").value = sinhvien.Ly;
        DomID("Hoa").value = sinhvien.Hoa;

    }

}
function LuuThongTin()
{
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;
    var toan = DomID("Toan").value;
    var ly = DomID("Ly").value;
    var hoa = DomID("Hoa").value;
     //Thêm sinh viên
    var sinhvien = new SinhVien(masv,hoten,cmnd,sdt,email,toan,ly,hoa);
    
     sinhvien.TinhDTB();
     sinhvien.XepLoai();
     danhSachSinhVien.SuaSinhVien(sinhvien);
     CapNhatDanhSachSV(danhSachSinhVien);
}
function TaoTheTD (className, value)
{
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}
function SetStorage()
{
    //Chuyển đổi object mảng danh sách sinh viên thành chuỗi json
    var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);
    //Rồi đem chuỗi json lưu vào storage và đặt tên là DanhSachSV
    localStorage.setItem("DanhSachSV",jsonDanhSachSinhVien);
}
function GetStorage()
{
    //Lấy ra chuỗi json là mảng danhsachsinhvien thông qua tên DanhSachSV
    var jsonDanhSachSinhVien = localStorage.getItem("DanhSachSV");
    var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    danhSachSinhVien.DSSV = mangDSSV;
    CapNhatDanhSachSV(danhSachSinhVien);

}