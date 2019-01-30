import { List, Card, Divider, Icon } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
const Markdown = require('react-markdown/with-html');
interface IProps {
  dispatch: any;
  loading: any;
  articleList: Array<{
    content: string;
    time: string;
    title: string;
  }>;
  photoFiles: Array<{
    url: string;
    time: string;
    title: string;
  }>;
}
class CardList extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.props.dispatch({
      type: 'global/getCurrentArticleList',
    });
    // this.props.dispatch({
    //   type: 'global/getCurrentPhotoList',
    // });
  }
  public static getDerivedStateFromProps(nextProps: IProps) {
    const { articleList, loading } = nextProps;
    return {
      articleList,
    };
  }
  handleRemoveCard = e => {
    this.props.dispatch({
      type: 'global/removeArticle',
      payload: e.target.getAttribute('data-time'),
    });
  }

  changeCard = (e) => {
    try {
      if (e.target.parentNode.parentNode.nextSibling.style.display === 'block') {
        e.target.parentNode.parentNode.nextSibling.style.display = 'none';
      } else {
        e.target.parentNode.parentNode.nextSibling.style.display = 'block';
      }
    } catch (error) { }
  }

  render() {
    let dateLineList = [];
    return (
      <>
        <List
          grid={{
            column: 1
          }}
          dataSource={this.props.loading ? new Array(5) : this.props.articleList}
          renderItem={item => {
            if (item) {
              let time = new Date(item.time);
              let localTime = time.toLocaleString();
              let dateLine = time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate();
              dateLineList.push(dateLine);
              return (
                // 真实数据
                <>
                  {dateLineList.indexOf(dateLine) === dateLineList.length - 1 ?
                    <p>{dateLine}</p>
                    :
                    null}
                  <List.Item>
                    <Card
                      hoverable
                      title={item.title}
                      bodyStyle={{
                        display: 'none'
                      }}
                      extra={
                        document.location.search === '?delete' ?
                          <span onClick={this.handleRemoveCard} data-time={item.time}>×</span>
                          :
                          null
                      }
                      onClick={this.changeCard}
                    >
                      <Markdown source={item.content} className={styles.markDownCard} escapeHtml={false} />
                      <span>{localTime}</span>
                    </Card>
                  </List.Item>
                </>
              );
            } else {
              return (
                // 骨架屏
                <List.Item>
                  <div className={styles.skeleton}>
                    <div className={styles.skeletonTitle} />
                    <div className={styles.skeletonContent} />
                    <div className={styles.skeletonTime} />
                  </div>
                </List.Item>
              );
            }
          }}
        />
      </>
    );
  }
}

export default connect(state => {
  return {
    loading: state.loading.global,
    articleList: state.global.articleList,
    photoFiles: state.global.photoFiles,
  };
})(CardList);