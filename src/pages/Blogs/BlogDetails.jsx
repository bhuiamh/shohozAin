import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import StepProcess from "../../components/StepProcess";
import FaqImage1 from "/serviceImage/onnano@shohozAin.png";
import BlogInformation from "./BlogInformation";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/blogs.json`);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setBlogs(data);

        // Convert `blogId` to a number if necessary and find the blog
        const foundBlog = data.find((blog) => blog.id === Number(blogId));
        if (!foundBlog) {
          // console.log(`No blog found with id ${blogId}`);
        }
        setBlog(foundBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }
  // Format the date only if the blog is available

  const filteredBlogs = blogs.filter(
    (blogItem) =>
      // Search by title
      blogItem.typeOfCategory
        .toLowerCase()
        .includes(blog.typeOfCategory.toLowerCase())
    // Search by description
    // || blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const limitedBlogs = filteredBlogs.slice(0, 5);

  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-24 px-4 tablet:px-0 ">
      <Helmet>
        <title>{`${blog.title} @ ShohozAin - Expert Insights on Legal Matters`}</title>
        <meta
          name="description"
          content={`Read the latest blog post on ShohozAin: ${blog.title}. Discover expert insights, legal advice, and useful information to help you manage your legal matters. Stay updated with our comprehensive articles and tips. ${blog.description}`}
        />
        <meta
          name="keywords"
          content={`${blog.title}, ShohozAin blog, legal advice, expert insights, legal tips, case management, legal services`}
        />
      </Helmet>

      <div className="">
        <StepProcess blog={blog} />
        <div className="grid grid-cols-2 tablet:grid-cols-12 mt-6 gap-5">
          <div className="col-span-2 tablet:col-span-9">
            <div className="bg-amber-500/5 p-4 tablet:p-6 rounded">
              <h1 className="text-xl tablet:text-2xl laptop:text-3xl font-bold text-orange-500">
                {blog.title}
              </h1>

              <div className="grid grid-cols-2 tablet:grid-cols-12 gap-3 tablet:gap-5 mt-3 tablet:mt-5 ">
                <div className="col-span-12 h-96 tablet:col-span-8">
                  <img
                    className="w-full h-full  border border-orange-500 rounded-md overflow-hidden"
                    src={FaqImage1}
                    alt=""
                  />
                </div>
                <BlogInformation blog={blog} />
              </div>
            </div>
            <div className="bg-amber-500/5 p-4 tablet:p-6 rounded mt-10">
              <h1 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                recusandae? Ipsum placeat deserunt nostrum! Dolor nulla placeat
                repellat natus accusamus eius adipisci accusantium fuga
                distinctio qui, iusto eaque optio consectetur itaque velit id
                sequi enim praesentium voluptatibus! Sint eos aspernatur, dicta
                optio officiis expedita impedit aliquid repudiandae est, ducimus
                vitae blanditiis illum quam similique alias itaque magni! Maxime
                repudiandae culpa repellat facere aspernatur qui impedit, quis
                fuga labore voluptatibus ducimus odit similique nulla
                consequuntur blanditiis maiores aut ut hic atque non iste a
                corrupti dolor. Consectetur enim ullam quod adipisci, vel unde
                quam numquam doloremque, totam, laudantium quasi tempore eius.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam earum ipsam sequi illum voluptatem impedit veniam
                perspiciatis, eos eveniet voluptas saepe fuga. Natus laboriosam
                aut eligendi consequatur eum harum libero? Ad reiciendis
                deserunt consequatur maxime? Illo aliquam repudiandae dolorum
                delectus? Beatae aspernatur alias, quos explicabo eius minus
                porro, nam eveniet quam perspiciatis voluptatem assumenda,
                corporis voluptatum. Error provident ea alias impedit, magni ad
                corporis totam repudiandae recusandae nobis deserunt magnam
                accusamus eius voluptate commodi adipisci voluptatum repellat
                culpa eum dolores. Recusandae nobis eum architecto cum, sapiente
                velit a voluptatum minus libero molestiae hic. In sapiente fugit
                veniam dolorum impedit, iste nesciunt soluta dolor ullam cum
                cumque unde necessitatibus, exercitationem itaque facere ducimus
                corrupti, accusamus sed. Illo quibusdam nemo illum ea nisi qui,
                corrupti possimus. Delectus esse accusantium doloribus dolorum
                incidunt autem itaque laudantium, cumque amet porro culpa at
                atque doloremque ipsum quaerat veniam voluptatibus, pariatur
                tenetur dignissimos fugit labore architecto harum aliquam
                impedit. Aliquid debitis eligendi expedita adipisci sunt beatae
                labore molestiae, ratione, officiis, totam magnam eum ad
                voluptates sequi aperiam! Quos ipsam a hic impedit magnam!
                Commodi, aspernatur provident vitae recusandae placeat,
                asperiores sunt eum tenetur aut ullam, ipsum facere dicta rem
                explicabo harum officiis ab ad. Ea itaque, nostrum rerum
                dignissimos laborum nobis assumenda suscipit quam, quod autem,
                unde cumque similique pariatur enim. Quibusdam molestias id nisi
                labore officia animi ratione modi exercitationem porro quod
                aspernatur beatae minima nam tenetur numquam, corrupti
                voluptates. Repellat reiciendis ducimus blanditiis, excepturi
                quia commodi expedita laborum rerum sed ex beatae quod doloribus
                provident voluptatum. Debitis architecto quam adipisci placeat
                similique provident obcaecati exercitationem hic dolores
                temporibus. Ea totam sunt a, mollitia dicta rerum amet voluptas
                id suscipit delectus vero culpa architecto quaerat expedita esse
                eum voluptatum voluptate accusantium maiores. Saepe tenetur
                impedit commodi provident aspernatur ex placeat quibusdam,
                explicabo ab tempora sit deleniti, perspiciatis sint veritatis
                harum animi autem excepturi veniam, blanditiis rerum quod. Dolor
                impedit fugiat saepe ad minus fugit quo expedita quasi modi nisi
                illum magnam cum vero temporibus, voluptas explicabo omnis.
                Nostrum iure nam earum laborum error! Odit ducimus possimus,
                provident consequuntur corporis molestiae nobis. Fuga quo, ad,
                odio molestiae perspiciatis itaque laudantium reprehenderit
                alias soluta recusandae voluptatibus beatae perferendis nihil?
                Enim temporibus nisi exercitationem eligendi explicabo doloribus
                excepturi modi. Sint earum quis harum ab, reprehenderit porro
                atque nobis possimus error accusantium aperiam quas facere
                maxime voluptatum assumenda similique cumque quibusdam
                aspernatur natus deleniti iusto esse praesentium eum. Magni
                sequi, facere repellat sunt vitae quasi qui, eos, architecto
                facilis omnis nesciunt quo commodi voluptate blanditiis a
                officia molestiae adipisci. Temporibus, assumenda? Deleniti
                animi possimus, nobis perferendis sunt nemo earum cupiditate
                explicabo velit voluptatem iure tempora rem illum in nihil a
                nisi! Quo, quod beatae nobis, tempora reprehenderit placeat
                harum, sunt hic quibusdam excepturi quae quidem aliquam cumque.
                Aliquid, aspernatur suscipit? Harum incidunt laboriosam natus
                amet explicabo nobis maiores alias quibusdam, facilis omnis,
                doloremque itaque voluptatibus similique dolor quia obcaecati ut
                molestiae, quas recusandae quod totam veniam? Totam, dolorum
                magni ipsam eius est enim tenetur optio nemo, quasi cumque,
                doloremque itaque quos id laboriosam dolores perspiciatis
                doloribus velit laudantium fugit repudiandae et distinctio
                soluta. Veritatis corporis quasi hic error repudiandae expedita!
                Alias minus necessitatibus qui facilis commodi enim consequuntur
                praesentium at quas, eius tenetur adipisci sit autem aut vel
                architecto tempora? Eius animi amet quos quibusdam ducimus?
                Molestiae voluptatem natus libero, non ad magnam nesciunt quo
                qui quaerat esse quam aliquid veritatis quidem quae. Officiis
                corporis provident voluptatibus, maxime eveniet earum dolorem
                voluptatem doloremque cumque tempora hic temporibus voluptas
                ratione qui at assumenda quam blanditiis sed. Aperiam porro
                doloremque autem consectetur aut sunt dolor ut blanditiis. Quia
                quo quaerat, a qui consequuntur, tempore voluptatibus illum
                ipsum vero sit voluptates. Provident aliquam pariatur ipsum quam
                necessitatibus, porro ipsam id tempora totam earum nisi ad
                labore dolor molestiae quasi dolorem fuga officiis assumenda
                dignissimos saepe consequuntur! Quas adipisci explicabo non
                voluptatem fugiat accusamus aspernatur pariatur magni dolorem
                totam, ad voluptatibus, nostrum quod dolores at laborum
                delectus. Officiis quam quisquam ea soluta aspernatur vel
                voluptatibus placeat id natus recusandae, laborum consequuntur
                impedit explicabo, sapiente distinctio fugit, culpa ut odit
                exercitationem. Nemo sequi mollitia officia blanditiis iure
                odio, ipsum libero accusantium rerum, dicta nostrum expedita a
                iste sapiente totam beatae, facere ut repudiandae quibusdam
                soluta! Tempore exercitationem culpa quam velit a, repudiandae
                voluptate dolore excepturi eligendi eius officia nobis, commodi
                dolorem molestias est non necessitatibus voluptatum voluptatem
                ut qui reprehenderit id alias ex! Dolor rem recusandae ratione
                a, vitae dolore distinctio animi officiis ipsam, quo enim. Hic
                itaque repellat eveniet doloribus reiciendis magnam aut iste
                laborum. Consectetur dolor minima mollitia quasi neque
                distinctio. Mollitia nobis cupiditate ducimus blanditiis beatae
                eos asperiores repudiandae quisquam? Maiores, blanditiis esse.
                Fugiat dolorem odio mollitia illo harum ab repellendus ipsa
                dicta cupiditate corporis labore aut, illum molestias sed sint,
                amet sequi ea. A fugit voluptatum eaque at esse suscipit.
                Adipisci consequatur repellendus aliquam reiciendis eum earum
                quae rem quia ipsum dolores voluptate, hic sapiente, ad
                exercitationem quisquam qui accusamus doloribus similique! Totam
                cum accusantium fugit in unde, ea quis ut libero beatae adipisci
                rem voluptatum. Totam porro soluta praesentium voluptate
                mollitia eius. Molestiae, reiciendis quod? Quis quam sequi in
                optio voluptatibus expedita ullam ut vitae, soluta qui. Iure,
                facere tenetur quibusdam numquam aspernatur temporibus quis
                dignissimos error sint deserunt nesciunt. Perferendis corrupti
                mollitia dignissimos minima a deleniti suscipit voluptatum omnis
                harum sapiente cumque consequatur veniam laudantium labore
                aliquam corporis cupiditate, minus explicabo enim. Distinctio ad
                sunt iure ipsa, repellat adipisci voluptates temporibus.
                Temporibus minima nesciunt voluptatum doloribus, ratione
                accusamus quis eum possimus consequatur dolorem quod velit, sed
                quae nisi, totam voluptas ducimus pariatur rem cupiditate?
                Voluptates expedita, alias explicabo esse deleniti quod quisquam
                at facere earum modi omnis iure recusandae delectus natus sit,
                possimus aut, hic eaque error minima ut? Natus ipsam architecto
                illo excepturi aperiam maxime nesciunt ipsum qui a dolorum aut
                unde asperiores minima possimus perspiciatis delectus nobis at
                eos iste officia, vero, magnam placeat dolor aliquid! Minima
                cumque deleniti hic aliquam mollitia eveniet voluptas dolorem
                voluptatem deserunt alias! Asperiores sint voluptas quis fugit
                exercitationem dolore reiciendis!
              </h1>
            </div>
          </div>
          <div className="col-span-2 tablet:col-span-3  p-3 tablet:p-4 laptop:p-5 flex flex-col justify-end bg-lime-500/5 rounded">
            <h1 className="text-xl tablet:text-lg laptop:text-[20px] font-bold text-orange-400">
              {blog.category} আরও কিছু ব্লগ
            </h1>
            <ul className="overflow-y-scroll h-full mt-4 ">
              {filteredBlogs.map((blog) => (
                <li key={blog.id} className="mb-2">
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="font-semibold hover:opacity-80  duration-300 px-1 py-1 w-full"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
