import { memo } from 'react';
import "./style.scss";
export const HomePage = () => {
    return(
        <div className='body_homepage'>
            

            <div className="row fifty-fifty-full-width-split-component   ">
                <div className="">
                    <div className="row ">
                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex justify-content-center">
                                <picture>
                                    <img src="https://www.tek.com/-/media/solutions/aerospace-defense/l2/radar-and-electronic-warfare/section-1-image.jpg?w=597" alt="Radar Overlay - Electronic Protection Systems" width="597" height="330" data-src="/-/media/solutions/aerospace-defense/l2/radar-and-electronic-warfare/section-1-image.jpg?h=330&amp;iar=0&amp;w=597" className="lazy loaded" data-was-processed="true"/>
                                </picture>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="">
                                <h2>Giải pháp hỗ trợ toàn bộ vòng đời phát triển hệ thống</h2>
                                <h4>Sử dụng công nghệ DSP mạnh mẽ để hỗ trợ vòng đời phát triển hệ thống của bạn, từ nguyên mẫu thuật toán tác chiến điện tử đến mô phỏng môi trường RF băng thông siêu rộng. </h4>
                                <p>Ngày nay, tình trạng tắc nghẽn động có trong phổ điện từ từ các thiết bị phát, gây nhiễu và can thiệp khác đòi hỏi các thiết bị có độ chính xác cao hơn để mô phỏng chính xác các môi trường được thể hiện trên hiện trường nhằm đảm bảo hệ thống bảo vệ điện tử radar được kiểm tra đầy đủ, để lực lượng quân sự của chúng ta có thể phát hiện các mối đe dọa thực tế và tránh xa nguy hiểm. </p>
                                <p>Các kỹ sư cần công nghệ và các công cụ đo lường tích hợp để nắm bắt và tái tạo chính xác <a href="https://www.tek.com/en/solutions/application/what-is-emc-emi-testing">môi trường vật lý và điện từ</a> trong quá trình vận hành tại hiện trường. Những công cụ này được sử dụng trong tất cả các giai đoạn phát triển, từ tạo nguyên mẫu nhanh, đến xác minh và xác nhận, thông qua bài kiểm tra mức độ sẵn sàng cho nhiệm vụ. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default memo(HomePage);