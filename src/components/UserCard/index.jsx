import React from "react";

class UserCards extends React.Component {
  state = {
    data: [],
    per: 1,
    page: 1
  };

  uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className='div1'>
          {this.state.data.map((data) => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <div class="lower-container">
                <div>
               <a href="UserCards" class="btn">View profile</a>
                </div>
                </div>

                </div>
              </div>
            </div>
          ))
          }
      </div>
    );
  }
}

export default UserCards;