import React, { Component } from "react";

class Content extends Component {
  state = {
    title: {
      home: "Home",
      about: "About",
      contacts: "Contacts",
      faq: "FAQ",
    },
    content: {
      home: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, excepturi blanditiis quasi fuga vitae inventore enim! Error nostrum est dolor natus voluptatem. Enim non nesciunt consequatur sed dolor iste maiores reprehenderit officia ipsa ab, veritatis molestiae nobis facilis necessitatibus pariatur distinctio sint excepturi sit alias quos expedita. Eos totam accusamus, pariatur nisi fugiat officiis explicabo placeat omnis molestiae facilis voluptates esse officia a quibusdam nesciunt optio neque! Ipsam quibusdam officiis inventore dolores aperiam quidem dolorem exercitationem reiciendis itaque non aspernatur neque dolor, facere quis illo molestias temporibus quia? Non similique fugit rerum alias, odio vero incidunt eveniet autem accusantium laudantium tenetur culpa quod temporibus ab sunt praesentium porro illo aspernatur asperiores maxime. Rem ea mollitia necessitatibus tempora optio velit neque dolor dolorum eum inventore fuga consectetur similique iure consequatur ex quas, voluptas, beatae odio, minus consequuntur non voluptatem. Laboriosam reiciendis exercitationem dolorum mollitia nulla! Aut repudiandae sed tempore officiis nisi, sapiente consequuntur cupiditate assumenda aspernatur. Eum, culpa voluptate? Accusantium praesentium neque dignissimos ut voluptatem recusandae qui illum dolores ducimus. Temporibus sint excepturi porro reprehenderit placeat incidunt dolorem quaerat. Aliquid, et nam. Accusantium sunt voluptatum, in repudiandae voluptas alias enim quas qui natus accusamus esse et perferendis exercitationem labore illum.",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi corporis voluptatibus possimus esse sed sunt blanditiis, tempore quod soluta nulla distinctio voluptatem quo doloribus rerum. Eligendi fugiat est, incidunt rem inventore, vero itaque magnam dolor asperiores perferendis saepe ea, ex facilis soluta eaque ipsa et laudantium at quisquam ratione a? Dolor voluptatibus, incidunt distinctio non quas hic porro iusto qui recusandae dignissimos, ipsa explicabo eius harum optio adipisci perferendis nisi ipsam assumenda consequatur molestias impedit? Inventore dolores dolorum autem rerum ratione explicabo? Distinctio laboriosam laudantium deleniti facilis ab deserunt possimus at ex fuga consequuntur, sequi molestias esse commodi error? Veniam soluta architecto ipsa facilis odit reiciendis quisquam autem labore numquam dolore? Labore, facilis soluta! Nostrum, error? Iusto incidunt culpa animi ab aspernatur! Aspernatur est perferendis nesciunt adipisci harum, pariatur maiores, aliquid optio eveniet reprehenderit alias cupiditate nemo accusamus ullam nostrum vero porro corporis! Impedit quia ullam voluptas quas suscipit! Quidem culpa laborum officiis commodi sint blanditiis praesentium id porro natus illo odit quo iure, sapiente sequi voluptate nesciunt libero consequuntur est. Sit quam pariatur odio! Recusandae consequuntur deserunt itaque provident aspernatur sunt nostrum quis amet aperiam eius reprehenderit maiores alias unde nemo ex facilis, assumenda commodi voluptate ratione sapiente tenetur soluta! Assumenda aliquid rerum recusandae esse voluptatem quo doloremque vel, earum perferendis dolore distinctio explicabo velit obcaecati nam perspiciatis non quisquam, quidem ducimus. Facilis sapiente quidem pariatur numquam rem officia consequatur doloremque animi alias consectetur nostrum vel iusto, optio fuga, excepturi doloribus porro minus adipisci nihil itaque! Vitae quam, eveniet itaque consectetur quidem nihil dolorem nam ipsum minima corporis ut commodi beatae, ad, numquam expedita qui eos! Asperiores voluptatum assumenda libero? Accusamus, et dignissimos ullam totam deleniti odit labore nam veritatis, praesentium exercitationem similique, optio asperiores reprehenderit incidunt numquam earum minus doloremque cum cumque inventore beatae. Doloremque, unde ipsum nobis corporis animi pariatur tempora nihil ea culpa? Perferendis, reprehenderit cumque asperiores ullam, impedit minima, quaerat natus rem possimus vitae beatae voluptas! Temporibus, voluptatibus. Itaque hic, voluptatem vitae voluptate sint corporis non eaque labore fugiat ea. Architecto provident quia necessitatibus. Doloremque soluta dicta, dolorum iure odio quisquam aliquid reprehenderit, esse ipsum at cum! Ipsa voluptate, delectus est illum sapiente debitis maiores neque minus voluptates, alias atque eaque architecto facere pariatur? Architecto earum, sunt enim sapiente expedita illum a quibusdam, iure similique ducimus eos. Suscipit unde necessitatibus architecto atque assumenda impedit laboriosam consequuntur sit neque corporis eaque eos numquam voluptatum, quos minus dicta corrupti. Deleniti ratione ea corporis dignissimos atque in cupiditate vero omnis voluptas voluptatibus? Officiis eveniet a nisi exercitationem ipsum commodi corrupti sunt quia sequi minus ipsa consequuntur adipisci numquam, illo similique sint quos deleniti saepe at explicabo perspiciatis aliquam sed veniam? Enim nemo, minus eaque expedita deserunt reprehenderit consequuntur atque magni inventore illum, laboriosam saepe, quae sapiente. Voluptatibus quae provident laborum ipsum nisi earum unde perferendis autem alias quod, id ducimus accusamus dolorem, labore officia a similique, laboriosam sequi repudiandae. Voluptatum architecto iure ad magnam illo? Eum, ab unde, sit eaque perferendis distinctio porro nisi obcaecati consequatur autem ducimus!",
      contacts:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum, libero praesentium mollitia ipsa eius tempora ipsum aliquam soluta eos ratione, nisi aperiam delectus in! Soluta expedita rem esse, obcaecati, similique ab est cupiditate magni quas mollitia quae. Maiores omnis veritatis distinctio nesciunt ab et molestiae reprehenderit, illum autem rerum libero repellat enim, quidem ducimus possimus sed facilis aspernatur. Eum temporibus nemo vitae iure tenetur hic provident. Autem suscipit officiis est vero, quae explicabo, enim doloremque minus soluta nam facere, quo ex. Eligendi fugiat, distinctio at adipisci animi qui! Officiis sed molestias officia placeat voluptate sequi quidem, animi doloribus sit!",
      faq: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti harum reiciendis accusamus delectus doloribus adipisci esse sapiente ratione odit dolorem rerum quaerat nemo repellat, corporis eaque earum nobis dolor odio in porro, recusandae facere? Quaerat id autem veniam, consequatur nam laudantium odio est iste ratione earum quod modi, facilis sit, similique dolor quisquam totam. Numquam porro voluptas molestiae quasi praesentium fugit nihil cum amet a minima corporis aperiam in magni voluptatem voluptate repellat reprehenderit quo, unde vel sequi? Animi consequuntur, ea rem aspernatur qui vitae! Necessitatibus esse dicta quasi rem repudiandae ullam quod tempora. Non optio ipsam at enim deserunt, fugit a, reiciendis ipsa omnis commodi cupiditate quasi ratione, nulla cumque dolores doloremque alias consequatur illum aliquam necessitatibus numquam. Eveniet beatae voluptas, alias, temporibus deserunt officia molestiae aperiam sint eligendi exercitationem optio quae, ratione perspiciatis? Commodi, soluta enim. Consequuntur dolor, aspernatur debitis provident aliquid inventore nobis delectus ab error placeat!",
    },
  };

  render() {
    return (
      <main className="tab-content" id="myTabContent">
        <section
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <h3 className="text-primary p-3">{this.state.title.home}</h3>
          <p className="text-info p-3">{this.state.content.home}</p>
        </section>
        <section
          className="tab-pane fade"
          id="about-tab-pane"
          role="tabpanel"
          aria-labelledby="about-tab"
          tabIndex="0"
        >
          <h3 className="text-primary p-3">{this.state.title.about}</h3>
          <p className="text-info p-3">{this.state.content.about}</p>
        </section>
        <section
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          <h3 className="text-primary p-3">{this.state.title.contacts}</h3>
          <p className="text-info p-3">{this.state.content.contacts}</p>
        </section>
        <section
          className="tab-pane fade"
          id="faq-tab-pane"
          role="tabpanel"
          aria-labelledby="faq-tab"
          tabIndex="0"
        >
          <h3 className="text-primary p-3">{this.state.title.faq}</h3>
          <p className="text-info p-3">{this.state.content.faq}</p>
        </section>
      </main>
    );
  }
}

export default Content;
