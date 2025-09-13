import Image from 'next/image'

interface table {
  index: number
  name: string
  price: number
  change: number
  cap: number
  action: string
  imgSrc: string
}

const tableData: table[] = [
  {
    index: 1,
    name: 'Bitcoin(BTC)',
    imgSrc: '/images/table/bitcoin.svg',
    price: 16458.23,
    change: 3.96,
    cap: 16828.25,
    action: 'Buy',
  },
  {
    index: 2,
    name: 'Ethereum(ETH)',
    imgSrc: '/images/table/cryptoone.svg',
    price: 16458.23,
    change: 3.96,
    cap: 16828.8,
    action: 'Buy',
  },
  {
    index: 3,
    name: 'Tether(USDT)',
    imgSrc: '/images/table/cryptothree.svg',
    price: 16458.23,
    change: -3.96,
    cap: 16828.3,
    action: 'Sell',
  },
  {
    index: 4,
    name: 'Binance Coin(BNB)',
    imgSrc: '/images/table/cryptotwo.svg',
    price: 16458.23,
    change: -3.96,
    cap: 16828.42,
    action: 'Sell',
  },
]

const Table = () => {
  return (
    <section id='exchange-section' className='scroll-mt-20'>
      <div className='container'>
        <div className='rounded-2xl bg-tablebg p-8 relative z-10 overflow-hidden'>
          <p className='text-white/80 text-2xl'>Market Trend Live Stream</p>
          <div className='overflow-x-scroll lg:overflow-auto'>
            <table className='table-auto w-full mt-10 border border-border'>
              <thead>
                <tr className='text-white bg-border rounded-2xl'>
                  <th className='px-4 py-4 font-normal rounded-s-lg'>#</th>
                  <th className='px-4 py-4 text-start font-normal'>NAME</th>
                  <th className='px-4 py-4 font-normal'>PRICE</th>
                  <th className='px-4 py-4 font-normal'>CHANGE 24H</th>
                  <th className='px-4 py-4 font-normal'>MARKET CAP</th>
                  <th className='px-4 py-4 font-normal rounded-e-lg'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((items, i) => (
                  <tr key={i} className='border-b border-b-border'>
                    <td className='px-4 py-6 text-center text-white'>
                      {items.index}
                    </td>
                    <td className='px-4 py-6 text-center text-white flex items-center justify-start gap-5 '>
                      <Image
                        src={items.imgSrc}
                        alt={items.imgSrc}
                        height={50}
                        width={50}
                      />
                      {items.name}
                    </td>
                    <td className='px-4 py-6 text-center text-white'>
                      ${items.price.toLocaleString()}
                    </td>
                    <td
                      className={`px-4 py-6 text-center ${
                        items.change < 0 ? 'text-primary' : 'text-secondary'
                      } `}>
                      {items.change}%
                    </td>
                    <td className='px-4 py-6 text-center text-white'>
                      ${items.cap.toLocaleString()}
                    </td>
                    <td
                      className={`px-4 py-6 text-center ${
                        items.action === 'Buy'
                          ? 'text-secondary'
                          : 'text-primary'
                      }`}>
                      {items.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Image
        src={'/images/table/Untitled.svg'}
        alt='ellipse'
        width={2460}
        height={102}
      />
    </section>
  )
}

export default Table
