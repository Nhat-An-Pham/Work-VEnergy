const CNG = "CNG";
const VTTB = "VTTB";
const EquipmentSupply = "EquipmentSupply"

const TradingData = [

    //CNG
    {
        id: "01",
        cate: CNG,
        img: require("../image/Trading/CNG_01.jpg"),
        name_us:"The project is implemented by the investor - PV GAS D - NORTH. VNERGY is responsible for providing VTDP for 09 CNG compressors at this project and the implementation period has been from 2018 until now.",
        name_vn:"Dự án được thực hiện bởi chủ đầu tư là Chi Nhánh Công Ty Cổ Phần Phân Phối Khí Thấp Áp Dầu Khí Việt Nam - Xí Nghiệp Phân Phối Khí Thấp Áp Miền Bắc. VNERGY với trách nhiệm cung cấp VTDP cho 09 máy nén khí CNG tại dự án này và thời gian thực hiện từ 2018 cho đến nay. ",
    },
    {
        id:"02",
        cate: CNG,
        img: require("../image/Trading/CNG_02.jpg"),
        name_us:"VNERGY continues to accompany GAS SOUTH - DONG NAI Branch in providing maintenance and repair equipment for the CNG compressor system for the project at My Xuan A Industrial Park, Phu My Town, Ba Ria Province - Vung Tau, the implementation period from 2020 continues up to now.",
        name_vn:"VNERGY tiếp tục đồng hành với doanh nghiệp GAS SOUTH - CN ĐỒNG NAI trong việc cung cấp vật tư thiết bị bảo dưỡng, sửa chữa cho hệ thống máy nén CNG cho dự án tại KCN Mỹ Xuân A, Thị xã Phú Mỹ, tỉnh Bà Rịa - Vũng Tàu, thời gian thực hiện từ 2020 tiếp tục cho đến nay.",  
    },

    //VTTB
    {
        id:"01",
        cate: VTTB,
        img: "",
        name_us:"The gas supply pipeline project for the My Xuan B1 Industrial Park area is implemented in My Xuan B1 Industrial Park, Ba Ria - Vung Tau province.",
        name_vn:"Dự án đường ống cấp khí cho khu vực KCN Mỹ Xuân B1 được thực hiện tại KCN Mỹ Xuân B1, tỉnh Bà Rịa - Vũng Tàu.",
    },
    {
        id:"02",
        cate: VTTB,
        img: "",
        name_us:"Gas receiving station for Global Aluminum Factory Phase 1 at My Xuan 1 Industrial Park, Ba Ria - Vung Tau province and the scope of work of VNERGY is procurement, fabrication and installation (EPC).",
        name_vn:"Trạm tiếp nhận khí cho Nhà máy Nhôm toàn cầu GĐ 1 tại KCN Mỹ Xuân 1, tỉnh Bà Rịa - Vũng Tàu và phạm vi công việc của VNERGY là mua sắm, chế tạo và thi công lắp đặt (EPC) ",
    },
    {   
        id:"03",
        cate: VTTB,
        img: "",
        name_us:'Pipeline and gas receiving station for Global Aluminium Factory Phase 2 with a capacity of 150,000m3/day - night with the task of designing, purchasing, manufacturing and installing (EPC) pipeline 10", 6" and gas metering station.',
        name_vn:"Đường ống và trạm tiếp nhận khí cho Nhà máy Nhôm Toàn Cầu GĐ 2 với công suất 150.000m3/ngày - đêm với nhiệm vụ thiết kế, mua sắm chế tạo và thi công lắp đặt (EPC) tuyến ống 10”, 6” và trạm đo đếm khí. ",
    },

    //EquipmentSupply
    {
        id:"01",
        cate: EquipmentSupply,
        img: "",
        name:'Analytical Measurement/Analyzer',
        description:"Gas Chromatograph (GC), Wobbe Index and Calorimeters, Vapor Pressure Analyzer, Hydrocarbon Dew point analyzer…",
    },
    {
        id:"02",
        cate: EquipmentSupply,
        img: "",
        name:'Flow Measurement Products',
        description:"Flow Computer, Turbine Meter, Rotary Meter, Ultrasonic Meter, Vortex Flow Meter, Coriolis Mass Flowmeter….",
    },
    {
        id:"03",
        cate: EquipmentSupply,
        img: "",
        name:'Control, Emergency/Safety/Process Valve',
        description:"Globe Valve, Globe Valve, High Performance Butterfly Valves, Shutdown Valve, On-off Valve, Actuator…",
    },
    {
        id:"04",
        cate: EquipmentSupply,
        img: "",
        name:' Fire & Gas/Safety Equipment',
        description:"Gas Detector (CH4, H2, H2S, CO…), Flame Detector, Smoke Detector, Portable Gas Detector…..",
    },
    {
        id:"05",
        cate: EquipmentSupply,
        img: "",
        name:'Level Measurement Product',
        description:"Magnetic Level Transmitter/Gauge, Radar level transmitter, Ultrasonic level transmitter, Level Switch, DP Level Transmitter…",
    },
    {
        id:"06",
        cate: EquipmentSupply,
        img: "",
        name:'Pressure, Temperature Measurement Product',
        description:"Pressure Transmitter, Pressure Gauge, Differential pressure transmitter, Temperature Transmitter, Temperature Switch…",
    },
    {
        id:"07",
        cate: EquipmentSupply,
        img: "",
        name:'Control System',
        description:"Control Cabinet (PLC based), ICSS, DCS, PCS, ESD, FGS, SCADA, IoT SCADA solution (3G/4G/5G, cloud server…)",
    },
]

export default TradingData;