// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Mai mèo à",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Tuổi mới thêm xinh đẹp",  // 同上...
        "Thành công hơn nà",
        "Được nhiều người yêu thương",
        "Hạnh phúc hơn nữa nữa nha",
        "Cho dù",
        "Chặng đường phía trước còn nhiều khó khăn",
        "Thì hãy cứ giữ nụ cười trên môi nhá",
        "Happy Birth Day"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Tuổi mới thêm xinh đẹp": "./imgs/xiaokeai.png",
        "Thành công hơn nà": "./imgs/success.png",
        "Được nhiều người yêu thương": "./imgs/1.png"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Thắp sáng lên nà",
        play: "Thêm chút giai điệu nữa",
        bannar_coming: "Happy Birth Day",
        balloons_flying: "?",
        cake_fadein: "1 chiếc bánh thì sao",
        light_candle: "Chuẩn bị thổi nến nhá",
        wish_message: "Sinh nhật vui vẻ!!",
        story: "MESSAGE FOR YOU",
    }
};
