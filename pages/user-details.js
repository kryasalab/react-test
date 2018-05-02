import Link from 'next/link';
import Head from '../components/Head';
import UserDetailsForm from '../components/UserDetailsForm';

const UserDetails = (props) => (
  <div>
    <Head title="Emirates SSE React Test - User Details" />
    <div className="container">
      <div className="row pt-60">
        <div className="col-md-12">
            <Link href="/">
              <button className="btn btn-secondary btn-lg">Back</button>
            </Link>
          </div>
        </div>
      </div>
    <UserDetailsForm details={props.details}/>
    <style jsx>{`
      .pt-60 {
        padding-top: 60px;
      }
    `}</style>
  </div>
);

UserDetails.getInitialProps = async function () {
  try {
    const res = await fetch('https://api.myjson.com/bins/17n2mv');
    const data = await res.json();
    return {
      details: data
    };
  }
  catch (err) {
    console.log(err)
  }
}

export default UserDetails;