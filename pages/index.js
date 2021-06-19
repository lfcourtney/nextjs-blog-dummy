import matter from 'gray-matter';
import Header from '../components/Header';
import BlogPost from '../components/Blog/BlogPost';

export default function Home(props) {
  const realData = props.data.map(blog => matter(blog));
  let listItems = realData.map(listItem => listItem.data);
  function getNumFromDateString(date){
    let dateNums = date.split(" ");
    let month = dateNums[1];
    let nMonth = 0;
    switch(month){
      case "January":
        nMonth = 1;
        break;
      case "Febuary":
        nMonth = 2;
        break;
      case "March":
        nMonth = 3;
        break;
      case "April":
        nMonth = 4;
        break;
      case "May":
        nMonth = 5;
        break;
      case "June":
        nMonth = 6;
        break;
      case "July":
        nMonth = 7;
        break;
      case "August":
        nMonth = 8;
        break;
      case "September":
        nMonth = 9;
        break;
      case "October":
        nMonth = 10;
        break;
      case "November":
        nMonth = 11;
        break;
      case "December":
        nMonth = 12;
        break;
      default:
        throw Error("Invalid Date");
    }
    return Number(dateNums[2]+nMonth+dateNums[0]);
  }
  //Sort Items Based On Date
  listItems = listItems.sort((a,b) => {

    let aDate = getNumFromDateString(a.date);
    let bDate = getNumFromDateString(b.date);

    return bDate - aDate;
  });


  return (
    <section id="index-page">
      <Header />
      <h1 id="blog-header">
        Luke's Blog
      </h1>
      <div className="container">
        <div className="blogsContainer">
          {listItems.map((blog, i) => (
            <BlogPost key={i} blog={blog} />
          ))}
        </div>
      </div>
      </section>
  )
}

export const getStaticProps = async () => {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');

  const blogs = files.filter(fn => fn.endsWith(".md"));

  const data = blogs.map(blog => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    return rawContent;
  });

  return {
      props: {
        data
      }
  }
}
