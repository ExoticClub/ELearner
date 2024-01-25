import { Link } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Admin.css"


function Home() {

  let bst=[{"Regno":"404","Mark":0,"Test":"You"}]
  
  return (
    <>
      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>ADMIN</p>
          </div>
          <div className='lo'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Learn'}>Analysis</Link>
            <Link to={'/Practice'}>Learn</Link>
            <Link to={'/Info'}>Practice</Link>
          </div>
        </div>

        <div className='Body'>
          <div className='Analysis1'>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['CSBS', 'CSE', 'AIDS',"ECE",'Mech','IT',"EEE","Civil"],
                  scaleType: 'band',
                  label:"Department",
                },
              ]}
              yAxis={[
                {
                  id: 'barCategories',
                  label:"Overall Performance",
                },
              ]}
              series={[
                {
                  data: [100, 50, 20,80,90,50,23,98],
                  
                },
              ]}
              width={640}
              height={400}
            />
          </div>
          <div className='Analysis2'>
            <div className='bstbox'>
              <p className='bsttitle'>Best Performing Student</p>
              <ul>
                <li className='topbst'>
                  <p  className='marktop'>Test Title</p>
                  <p className='regtop'>Register Number</p>
                  <p>Mark</p>
                </li>
                {bst.map((data) => (
                  <li className='bsttab'>
                    <p>{data.Test}</p>
                    <p>{data.Regno}</p>
                    <p>{data.Mark}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bstbox'>
              <p className='bsttitle'>Best Performing Student</p>
              <ul>
                <li className='topbst'>
                  <p  className='marktop'>Test Title</p>
                  <p className='regtop'>Register Number</p>
                  <p>Mark</p>
                </li>
                {bst.map((data) => (
                  <li className='bsttab'>
                    <p>{data.Test}</p>
                    <p>{data.Regno}</p>
                    <p>{data.Mark}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className='Foot'>
          <p>This Website Was Created By <Link>Team Exotic</Link></p>
        </div>

      </div>
    </>
  )
}

export default Home