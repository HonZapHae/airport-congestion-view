import { ParkingDataType } from '../../constant';

function parseParkingData(doc: string) {
  const domparser = new DOMParser();
  const parsedDoc = domparser.parseFromString(doc, 'text/html');
  const nodeList = parsedDoc.querySelectorAll('#ct .end_list_box .parking_info table tbody tr');

  const parkingData = Array.from(nodeList).map((node) => {
    const nameEl = node.querySelector('.area_name') as HTMLElement;
    const remainEl = node.querySelector('.remain_area span:not(.blind)') as HTMLElement;
    const allEl = node.querySelector('.all_area') as HTMLElement;
    // 만차인경우 allEl === null
    return {
      name: nameEl.innerText || '',
      remain: !allEl || Number.isNaN(remainEl.innerText) ? 0 : Number(remainEl.innerText),
      all: !allEl || Number.isNaN(allEl.innerText.replace('전체주차공간', '')) ? 0 : Number(allEl.innerText.replace('전체주차공간', '')),
    };
  }) as ParkingDataType[];

  return parkingData;
}

export { parseParkingData };
