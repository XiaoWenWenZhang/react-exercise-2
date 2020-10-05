import React from 'react';

class GoodsList extends React.Component {
  state = {
    goods: null,
    isLoading: true,
  };

  // componentWillMount(){
  //     fetch('../../json-server/api.json')
  //     .then((res) => {return res.json(); })
  //     .then((data) => {alert(JSON.stringify(data));this.setState({goods:JSON.stringify(data)});})
  // }

  //   componentDidMount() {
  //     fetch('../../json-server/api.json', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })
  //       .then((response) => response.json()) //解析为Promise
  //       .then((data) => {
  //         this.setState({ goods: data }); ////赋值到本地数据
  //         console.log(this.state.goods);
  //       });
  //   }

  async componentDidMount() {
    const goods = await (await fetch('http://localhost:3001/products')).json();
    console.log(goods);
    this.setState({
      isLoading: false,
      goods,
    });
  }

  render() {
    return <div className="goods-list"></div>;
  }
}

export default GoodsList;

