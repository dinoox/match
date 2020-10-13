package com.utils;


import com.bean.Student;
import com.bean.StudentEmploymentInfo;
import com.bean.StudentTermInfo;
import com.dao.IStudentEmploymentInfoDao;
import com.dao.IStudentTermInfoDao;
import com.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Random;

@RestController
public class DataUtil {

    @Autowired
    private IStudentService studentService;

    @Autowired
    private IStudentTermInfoDao studentTermInfoDao;

    @Autowired
    private IStudentEmploymentInfoDao studentEmploymentInfoDao;


    private static final String[] Surname = {"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
            "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水","章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎",
            "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷",
            "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和",
            "穆", "萧", "尹", "姚", "邵", "湛", "汪", "祁", "毛", "禹", "狄", "米", "贝", "明", "臧", "计", "伏", "成", "戴", "谈", "宋", "茅", "庞", "熊", "纪", "舒",
            "屈", "项", "祝", "董", "梁", "杜", "阮", "蓝", "闵", "席", "季", "麻", "强", "贾", "路", "娄", "危", "江", "童", "颜", "郭", "梅", "盛", "林", "刁", "钟",
            "徐", "邱", "骆", "高", "夏", "蔡", "田", "樊", "胡", "凌", "霍", "虞", "万", "支", "柯", "昝", "管", "卢", "莫", "经", "房", "裘", "缪", "干", "解", "应",
            "宗", "丁", "宣", "邓",  "单", "杭", "洪", "包", "诸", "左", "石", "崔", "吉", "钮", "龚", "程", "嵇", "邢", "滑", "裴", "陆", "荣", "翁", "荀",
            "羊", "于", "惠", "甄", "曲", "家", "封", "芮", "羿", "储", "靳", "汲", "邴", "糜", "松", "井", "段", "富", "巫", "乌", "焦", "巴", "弓", "牧", "隗", "山",
            "谷", "车", "侯", "蓬", "全",  "班", "仰", "秋", "仲", "伊", "宫", "宁", "仇", "栾", "暴", "甘", "钭", "厉", "戎", "祖", "武", "符", "刘", "景",
            "詹", "束", "龙", "叶", "幸", "司", "韶", "郜", "黎", "蓟", "溥", "印", "宿", "白", "怀", "蒲", "邰", "从", "鄂", "索", "咸", "籍", "赖", "卓", "蔺", "屠",
            "蒙", "池", "乔", "阴", "郁", "胥", "能", "苍", "双", "闻", "莘", "党", "翟", "谭", "贡", "劳", "逄", "姬", "申", "扶", "堵", "冉", "宰", "郦", "雍", "却",
            "桑", "桂", "牛", "寿", "通", "边", "扈", "燕", "冀", "浦", "尚", "农", "温", "别", "庄", "晏", "柴", "瞿", "阎", "充", "慕", "连", "茹", "习",
            "艾", "鱼", "容", "向", "古", "易", "慎", "戈", "廖", "庾", "终", "暨", "居", "衡", "步", "都", "耿", "满", "弘", "匡", "国", "文", "寇", "广", "禄",
            "阙", "东", "欧", "殳", "沃", "利", "蔚", "越", "隆", "师", "巩", "厍", "聂", "勾", "敖", "融", "冷", "訾", "辛", "阚", "那", "简", "饶", "空",
            "曾", "毋", "沙", "养", "鞠", "须", "丰", "巢", "关", "相", "查","荆", "红", "游", "郏", "竺", "权",  "盖", "益", "桓", "公",
            "督", "岳", "帅", "缑", "亢", "况", "有", "琴", "归", "海", "晋", "楚", "闫", "法", "汝", "鄢", "涂", "钦", "商", "牟", "佘", "佴", "伯", "赏", "墨",
            "哈", "谯", "篁", "年", "爱", "阳", "佟", "言", "福", "南", "火", "铁", "迟", "漆", "官", "冼", "真", "展", "繁", "檀", "祭", "密", "敬", "揭", "舜", "楼",
            "疏", "冒", "浑", "挚", "胶", "随", "高", "皋", "原", "种", "练", "弥", "仓","覃", "门", "恽", "来", "召", "仪", "风", "介", "巨",
            "木", "京", "狐", "虎", "枚", "抗", "达", "杞", "苌", "折", "麦", "庆", "过", "竹", "端", "鲜", "皇", "老", "是", "秘", "畅", "邝", "还", "宾",
            "闾", "辜", "纵",};

    public static String getChineseName() {

        String str = null;
        String name = null;
        int highPos, lowPos;
        Random random = new Random();
        //区码，0xA0打头，从第16区开始，即0xB0=11*16=176,16~55一级汉字，56~87二级汉字
        highPos = (176 + Math.abs(random.nextInt(55)));
        random = new Random();
        //位码，0xA0打头，范围第1~94列
        lowPos = 161 + Math.abs(random.nextInt(55));

        byte[] bArr = new byte[2];
        bArr[0] = (Integer.valueOf(highPos)).byteValue();
        bArr[1] = (Integer.valueOf(lowPos)).byteValue();
        try {
            //区位码组合成汉字
            str = new String(bArr, "GB2312");
            int index = random.nextInt(Surname.length - 1);

            String str1 = "";
            Double number = Math.random();
            if(number > 0.5) {
                random = new Random();
                highPos = (176 + Math.abs(random.nextInt(55)));
                random = new Random();
                lowPos = 161 + Math.abs(random.nextInt(55));
                bArr[0] = (new Integer(highPos)).byteValue();
                bArr[1] = (new Integer(lowPos)).byteValue();

                str1 = new String(bArr, "GB2312");
            }

            //获得一个随机的姓氏
            name = Surname[index] + str + str1;

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return name;
    }

    @RequestMapping("/toAddStudentData")
    public String toAddStudentData () {

        List<Student> students = studentService.findAllStudent();

        for (int i = 0; i < students.size(); i++) {

            String no = students.get(i).getNo().replaceFirst("8","9");
            String name = getChineseName();
            Integer age = students.get(i).getAge()+1;
            String sex = "";
            Integer povertyLevel = 0;
            String admissionTime = students.get(i).getAdmissionTime().replaceFirst("8","9");

            Double number1 = Math.random();
            Double number2 = Math.random()*100;

            if(number1 > 0.5) {
                sex = "男";
            } else {
                sex = "女";
            }

            if(number2>=80) {
                povertyLevel = 3;
            } else if (number2 >= 90){
                povertyLevel = 2;
            } else if (number2 > 96) {
                povertyLevel = 1;
            }

            Student student = new Student();
            student.setNo(no);
            student.setName(name);
            student.setAge(age);
            student.setSex(sex);
            student.setMajor(students.get(i).getMajor());
            student.setProvince(students.get(i).getProvince());
            student.setPovertyLevel(povertyLevel);
            student.setAdmissionTime(admissionTime);

            System.out.println(student);
            studentService.insertStudent(student);

        }

        for (int i = 0; i < students.size(); i++) {

            String no = students.get(i).getNo().replaceFirst("8","7");
            String name = getChineseName();
            Integer age = students.get(i).getAge()+1;
            String sex = "";
            Integer povertyLevel = 0;
            String admissionTime = students.get(i).getAdmissionTime().replaceFirst("8","7");

            Double number1 = Math.random();
            Double number2 = Math.random()*100;

            if(number1 > 0.5) {
                sex = "男";
            } else {
                sex = "女";
            }

            if(number2>=80) {
                povertyLevel = 3;
            } else if (number2 >= 90){
                povertyLevel = 2;
            } else if (number2 > 96) {
                povertyLevel = 1;
            }

            Student student = new Student();
            student.setNo(no);
            student.setName(name);
            student.setAge(age);
            student.setSex(sex);
            student.setMajor(students.get(i).getMajor());
            student.setProvince(students.get(i).getProvince());
            student.setPovertyLevel(povertyLevel);
            student.setAdmissionTime(admissionTime);

            System.out.println(student);
            studentService.insertStudent(student);

        }

        for (int i = 0; i < students.size(); i++) {

            String no = students.get(i).getNo().replaceFirst("8","6");
            String name = getChineseName();
            Integer age = students.get(i).getAge()+1;
            String sex = "";
            Integer povertyLevel = 0;
            String admissionTime = students.get(i).getAdmissionTime().replaceFirst("8","6");

            Double number1 = Math.random();
            Double number2 = Math.random()*100;

            if(number1 > 0.5) {
                sex = "男";
            } else {
                sex = "女";
            }

            if(number2>=80) {
                povertyLevel = 3;
            } else if (number2 >= 90){
                povertyLevel = 2;
            } else if (number2 > 96) {
                povertyLevel = 1;
            }

            Student student = new Student();
            student.setNo(no);
            student.setName(name);
            student.setAge(age);
            student.setSex(sex);
            student.setMajor(students.get(i).getMajor());
            student.setProvince(students.get(i).getProvince());
            student.setPovertyLevel(povertyLevel);
            student.setAdmissionTime(admissionTime);

            System.out.println(student);
            studentService.insertStudent(student);

        }

        for (int i = 0; i < students.size(); i++) {

            String no = students.get(i).getNo().replaceFirst("8","5");
            String name = getChineseName();
            Integer age = students.get(i).getAge()+1;
            String sex = "";
            Integer povertyLevel = 0;
            String admissionTime = students.get(i).getAdmissionTime().replaceFirst("8","5");

            Double number1 = Math.random();
            Double number2 = Math.random()*100;

            if(number1 > 0.5) {
                sex = "男";
            } else {
                sex = "女";
            }

            if(number2>=80) {
                povertyLevel = 3;
            } else if (number2 >= 90){
                povertyLevel = 2;
            } else if (number2 > 96) {
                povertyLevel = 1;
            }

            Student student = new Student();
            student.setNo(no);
            student.setName(name);
            student.setAge(age);
            student.setSex(sex);
            student.setMajor(students.get(i).getMajor());
            student.setProvince(students.get(i).getProvince());
            student.setPovertyLevel(povertyLevel);
            student.setAdmissionTime(admissionTime);

            System.out.println(student);
            studentService.insertStudent(student);

        }



        return "1";
    }

    /**
     * 根据学生的省份来源随机生成所在市区
     * @return
     */

    @RequestMapping("/addRandomCity")
    public String addRandomCity(){

        String [] citys = {"莱芜市","济南市","青岛市","淄博市","枣庄市","潍坊市","烟台市","临沂市","东营市","德州市","济宁市","菏泽市","聊城市","滨州市","泰安市","日照市","威海市"};

        System.out.println(citys.length);

        List<Student> students = studentService.findStudentByProvince("山东");

        for (Student student : students) {
            int city = new Random().nextInt(17);
            student.setCity(citys[city]);
            System.out.println(student);

            studentService.updateStudent(student);
        }
        return "";

    }


    /**
     * 随机生成学生贫困等级
     * 1级贫困4%  2级贫困6%  3级贫困10% 占总学生20%
     * @return
     */
    @RequestMapping("/editPovertyLevel")
    public String editPovertyLevel() {

        List<Student> students = studentService.findAllStudent();

        for (Student student : students) {

            int level = 0;

            int random = new Random().nextInt(101);
            if(random >= 97){
                level = 1;
            } else if (random >=90) {
                level = 2;
            } else if(random >=80) {
                level = 3;
            }

            student.setPovertyLevel(level);
            studentService.updateStudent(student);

        }


        return "";
    }


    /**
     * 造所有在校生的每学期的一卡通消费及成绩等数据
     * @return
     */

    @RequestMapping("/addAllStudentTermInfo")
    public String addAllStudentTermInfo() {

        List<Student> students = studentService.findStudentByGrade("2016");

        String term = "第八学期";
        Integer random = new Random().nextInt(101);
        Double money;
        Double score;


        for (Student student : students) {

            if(random <= 60){
                money = nextDouble(4000, 6000);
            } else if (random < 90) {
                money = nextDouble(1000, 4000);
            } else {
                money = nextDouble(0, 1000);
            }

            if(random >= 97){
                score = nextDouble(4.3,4.6);
            } else if(random >= 90) {
                score = nextDouble(4.0,4.3);
            } else if(random >= 40) {
                score = nextDouble(3.0,4.0);
            } else if(random >= 10) {
                score = nextDouble(2.0,3.0);
            } else {
                score = nextDouble(0,2.0);
            }

            money = Double.valueOf(String.format("%.1f",money));
            score = Double.valueOf(String.format("%.1f",score));

            StudentTermInfo info = new StudentTermInfo();

            info.setNo(student.getNo());
            info.setTerm(term);
            info.setCardConsume(money);
            info.setScore(score);

            System.out.println(info);
            studentTermInfoDao.insertStudentTermInfo(info);

            random = new Random().nextInt(101);

        }
        return "";
    }
    
    /**
     * 造已毕业学生的就业信息数据
     * 事业 5% 升学 40% 企业 40% 未就业 10% 行政 5%
     * @return
     */

    @RequestMapping("/addEmploymentInfo")
    public String addEmploymentInfo(){

        String[] vocations = {"事业","企业","升学","未就业","行政"};

        Integer random = new Random().nextInt(101);

        String vocation;

        List<Student> students = studentService.findStudentByGrade("2015");

        for (Student student : students) {

            if(random >= 60) {
                vocation = "升学";
            } else if(random >= 20) {
                vocation = "企业";
            } else if(random >= 10) {
                vocation = "未就业";
            } else if(random >= 5) {
                vocation = "事业";
            } else {
                vocation = "行政";
            }

            StudentEmploymentInfo info = new StudentEmploymentInfo();

            info.setNo(student.getNo());
            info.setVocation(vocation);

            System.out.println(info);

            studentEmploymentInfoDao.insertStudentEmploymentInfo(info);

            random = new Random().nextInt(101);
        }

        return "";
    }


    @RequestMapping("/addEmploymentAddressInfo")
    public String addEmploymentAddressInfo() {

        List<Student> students = studentService.findStudentByGrade("2015");

        List<StudentEmploymentInfo> infos = studentEmploymentInfoDao.findAllStudentEmploymentInfo();

        System.out.println(students.size() +  " " + infos.size());

        for (int i = 0;i<students.size();i++) {

            StudentEmploymentInfo info = infos.get(i);

            System.out.println(students.get(i).getCity() + students.get(i).getNo() + students.get(i).getProvince());

            info.setProvince(students.get(i).getProvince());
            info.setCity(students.get(i).getCity());

            studentEmploymentInfoDao.updateStudentEmploymentInfo(info);
        }
        return "";
    }



    public static void main(String[] args) {

        String[] vocations = {"事业","企业","升学","未就业","行政"};


        for(int i = 0; i<30;i++){
            System.out.println(new Random().nextInt(5));
        }

    }



    /**
     * 返回指定区间的随机double
     * @param min （指定的左区间）
     * @param max （指定的右区间）
     * @return  返回的double
     */

    public static double nextDouble(final double min, final double max) {
        return min + ((max - min) * new Random().nextDouble());
    }
}
