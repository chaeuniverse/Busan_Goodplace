import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Itm = ({ busanFood }) => {
    const { itm } = useParams();
    const store = busanFood.find(it => it.TITLE === itm);


    const { kakao } = window;

    const KakaoMapScript = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(store.LAT, store.LNG),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(store.LAT, store.LNG);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    useEffect(() => {
        store && KakaoMapScript()
    }, [store])


    return (
        <ul className="secPage">
            {
                store && <li>
                    <h2 className="secTitle">{store.TITLE}</h2>
                    <div id="map" style={{ height: "500px" }}></div>
                    <div className="detailPage">
                        <h3 className="detailTitle">{store.MAIN_TITLE}</h3>
                        <figure>
                            <img src={store.MAIN_IMG_NORMAL} alt={store.TITLE} className="foodItm" />
                        </figure>
                    </div>
                </li>
            }
        </ul>
    )
}

export default Itm;