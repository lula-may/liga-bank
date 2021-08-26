import React from 'react';
import {YMaps, GeolocationControl, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import './style.scss';

import {BRANCHES} from '../../const';

function Branches() {
  return (
    <YMaps>
      <section className="branches">
        <div className="branches__wrapper">
          <h2>Отделения Лига Банка</h2>
          <Map className="branches__map"
            state={{
              center: [56.838011, 60.597474],
              zoom: 5,
            }}
          >
            <ZoomControl
              options={{
                size: 'small',
                position: {
                  top: 200,
                  right: 10,
                },
              }}
            />
            <GeolocationControl
              options={{
                position: {
                  top: 280,
                  right: 10,
                },
              }}
            />
            {BRANCHES.map(({id, coords}) => (
              <Placemark
                key={id}
                defaultGeometry={coords}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: './img/marker.svg',
                  iconImageSize: [35, 40],
                  iconImageOffset: [-17, -40]}}
              />
            ))}
          </Map>
        </div>
      </section>
    </YMaps>
  );
}

export default Branches;
