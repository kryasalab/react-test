import Link from 'next/link';
import Fetch from 'isomorphic-unfetch';
import Head from '../components/Head';

const Index = (props) => (
  <div>
    <Head title="Emirates SSE React Test - Home" />
    <div className="container">
      <div className="row ptx-15">
        <div className="col-md-12">
          <div className="col-md-4 offset-md-4">
            <Link href="/user-details">
              <button id="show" className="btn btn-secondary btn-lg btn-block">Show User Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .ptx-15 {
        padding-top: 15%;
      }
      .btn-secondary {
        color: #008cba;
        font-weight: 500;
      }
    `}</style>
  </div>
);

export default Index;