import PageHeader from './page-header.jsx';
import Mobile from './mobile/parking/wrapper.jsx';
import Desktop from './desktop/parking/wrapper.jsx';
class Section extends React.Component {
	render() {
		return (
			<div className="section flex" id="location-section">
				<div className="uk-width-8-10 uk-container-center">
					<PageHeader header="location">
						IUP International Building 17
						<br/>
						Kasetsart University
					</PageHeader>
				</div>
				<div>
					<iframe width="100%" height="300" frameBorder="0" style={{
						border: "0"
					}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB3BYkLjKKhvcbiwxKYlY3huEHW0qcOnH4&q=อาคารเรียนคณะวิศวกรรมศาสตร์+Khwaeng+Lat+Yao,+Khet+Chatuchak,+Krung+Thep+Maha+Nakhon+10220/@13.8461438,100.5686123,18"></iframe>
				</div>
				<div className="uk-width-8-10 uk-container-center uk-flex" id="location-body">
					<Mobile/>
					<Desktop/>
				</div>
			</div>
		);
	}
}

export default Section;
