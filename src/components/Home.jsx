import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authListener, handleLogout } from "../store/auth/authActions";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authListener());
  }, []);

  return (
    <div>
      Home
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed error
        nesciunt, corrupti quis, in accusamus ex laborum delectus laudantium
        recusandae ipsa nostrum voluptate fugiat at natus pariatur itaque
        excepturi est aliquid quidem. Iusto dolorum qui eaque est quisquam,
        voluptatibus velit nesciunt dolore praesentium quis maiores nostrum
        deserunt mollitia consectetur, dicta vero aspernatur? Eaque ducimus
        excepturi quo suscipit quisquam perferendis sit quae, dolorem cum dicta
        possimus velit laudantium modi officia illo laborum sapiente,
        perspiciatis, voluptatibus quis molestiae nulla provident odio?
        Voluptates suscipit libero nobis vel velit consequatur voluptas? Commodi
        quod ab sapiente hic, animi dolorum soluta a ducimus cum dicta quis
        facere nemo perferendis accusamus! Sequi fuga tenetur excepturi neque,
        inventore quae vero vel repellendus ipsum nobis temporibus error, atque
        iusto. Vel deserunt nam iste sapiente fuga, et nihil. Delectus unde iure
        dolor fugiat ullam nobis fugit, cumque quae harum enim, beatae facilis
        eligendi inventore? Earum eaque possimus quam iste porro! Maiores sequi
        ratione repellat perspiciatis hic, quaerat illo repellendus nostrum
        laudantium officiis officia nemo sapiente tenetur tempore ducimus
        voluptatum commodi! Numquam rerum dolor voluptates temporibus id nostrum
        hic praesentium optio tempore repellendus minus adipisci harum unde
        similique quas tenetur iusto vero, a mollitia quo, sit ipsa obcaecati
        corporis. Praesentium, distinctio. Atque iure obcaecati aliquam,
        excepturi id reprehenderit, optio voluptatibus perspiciatis ut natus
        ducimus consequatur numquam amet quae sed laboriosam a velit totam
        labore deleniti. Sunt non facere praesentium cumque? Natus aliquid
        eligendi magni placeat incidunt quae corporis atque est odit, ab
        nesciunt ullam iure quod soluta adipisci tempore blanditiis deserunt
        molestiae non aliquam commodi, earum cumque reprehenderit perferendis!
        Doloribus obcaecati magnam ratione quasi sint, in, aut, nemo praesentium
        reiciendis nisi autem? Similique, alias, repellendus optio repellat
        accusamus perferendis cupiditate laboriosam blanditiis id quasi
        voluptatum tenetur veritatis fuga aliquid, adipisci quia natus a
        assumenda. Sapiente officia numquam quisquam expedita. Delectus libero
        nulla repudiandae, unde sequi ratione, asperiores voluptatibus possimus
        nemo vel distinctio, cupiditate magnam quasi suscipit? Ullam debitis,
        possimus culpa, exercitationem aspernatur dolorum tenetur nisi sed
        voluptatem facilis voluptatum! Quod perspiciatis quas, laboriosam sint
        placeat, quasi alias odit similique pariatur fuga sed ducimus, voluptate
        perferendis numquam autem magnam dolore sequi incidunt maxime id fugit!
        Nam ducimus similique molestiae eveniet, animi, nulla accusamus dolorem
        sequi esse odio eum aperiam tempora voluptates dolor qui soluta. Facilis
        sit aspernatur temporibus placeat hic soluta rerum iusto quibusdam ipsa
        blanditiis, provident voluptatibus perferendis cupiditate maiores
        dolores laborum earum, dignissimos, nesciunt optio accusamus sed. Cumque
        nobis suscipit nemo itaque dolore totam quis saepe repellendus omnis
        nulla ut, amet enim soluta. Perferendis reiciendis explicabo assumenda
        inventore quaerat, dolore unde, amet reprehenderit similique repudiandae
        accusantium hic quos molestiae porro fuga nostrum voluptatem tempora
        iste at praesentium illo expedita distinctio officiis. Laborum harum
        aliquam sint, consequatur, eaque maxime similique laboriosam nobis
        asperiores voluptates inventore iste doloremque ducimus, ut quibusdam
        tenetur et recusandae! Omnis nesciunt cum illum aperiam vitae possimus
        sequi rem quis fugit deleniti alias reiciendis molestias dolores saepe,
        animi distinctio quibusdam unde. Iusto optio consectetur consequatur, ea
        voluptas iste numquam praesentium soluta nam, ratione est veritatis esse
        eius quidem laborum quas molestias nesciunt aspernatur, beatae
        perspiciatis ipsam temporibus porro placeat. Sunt iste corporis labore
        nesciunt beatae provident odio? Similique deserunt aperiam cum, delectus
        dolores nam veritatis eaque pariatur eos in consequuntur incidunt
        provident assumenda aspernatur iste expedita sunt excepturi nihil totam.
        Distinctio, quia nesciunt expedita ab nulla, a error repellat cum ex
        suscipit nam provident ullam, eius id voluptates saepe optio?
        Voluptatibus, magnam! Doloremque, quidem dolorum quod facere odio
        aliquam praesentium nostrum deleniti neque non, sequi repellat omnis. Ut
        pariatur dolorum assumenda fuga quasi sequi vel natus porro autem
        mollitia rem, a veritatis quidem neque dolores, tenetur hic eligendi
        perferendis dignissimos ad, voluptate dolore quibusdam temporibus? Vitae
        eos assumenda quae voluptates tempore pariatur officiis numquam ratione
        ipsum quos, sit alias quas incidunt rem nobis ipsa in nulla facilis
        error autem voluptatum accusamus placeat impedit! Quam perspiciatis, est
        voluptatum quod in aperiam repudiandae corporis culpa temporibus soluta?
        Molestias dolore officia amet veniam tempore sunt praesentium vitae,
        tempora laudantium odio non consectetur quisquam, numquam voluptatum
        doloremque repudiandae qui perferendis dignissimos illo dolorem
        inventore! Dolor odio, dolore aperiam repellendus unde fuga aut quod vel
        enim reiciendis ut corrupti pariatur laudantium adipisci repudiandae
        ratione nesciunt voluptate consectetur minima aliquam! Sunt aperiam,
        repudiandae, quibusdam eos ex dolores suscipit labore laudantium qui
        recusandae excepturi. Praesentium debitis eius dolorum autem modi ipsum
        pariatur maxime voluptate sint possimus beatae consectetur assumenda
        illo deleniti labore in id cum obcaecati earum, aut molestiae aperiam
        esse libero corporis! Sequi, fuga eius? Eveniet et sint sequi,
        reiciendis deleniti error eos possimus. Quis iusto necessitatibus magni
        similique, autem tempora vel excepturi deserunt est quisquam laudantium
        atque consequatur error nam ab voluptatibus temporibus quos nobis nihil
        harum modi repudiandae. Ipsum tempore ipsam iure, porro labore, dolorem
        enim, recusandae corrupti quis dolorum rerum deserunt autem assumenda
        voluptate natus. Aliquid earum possimus hic fugiat, qui cupiditate.
        Deserunt laboriosam officiis at reprehenderit ad eum! Incidunt
        cupiditate animi, perspiciatis ipsam quidem aperiam sapiente
        exercitationem quo numquam culpa? Quidem, animi eos laboriosam quaerat
        corporis, omnis ipsam rem deleniti ut deserunt quae cum. Eligendi, enim
        molestiae. Ullam quaerat ad similique corrupti rem iure sed, repellat
        culpa fugiat voluptatem suscipit aperiam vel deleniti? Quas corporis
        facere nesciunt ab, quaerat fugiat, impedit atque ut neque adipisci
        inventore ipsa porro harum aut, dolores commodi rem. Voluptas mollitia
        velit illum! Pariatur necessitatibus aspernatur fugiat maxime odio
        facere error et quasi voluptas quis eaque amet qui consequuntur sequi,
        temporibus facilis odit. Reiciendis vero, voluptate, doloribus
        perspiciatis beatae, delectus eos reprehenderit minus eveniet nisi ab.
        Minima repellendus, itaque dolores alias repudiandae doloribus
        reprehenderit excepturi aperiam architecto voluptas debitis eligendi
        veritatis sequi laboriosam. Nemo repellat quisquam recusandae delectus
        assumenda debitis pariatur quo similique ipsam ex quas modi ut, officia
        error? Recusandae ex atque ratione voluptatibus consequuntur, corporis
        sint enim distinctio laudantium natus suscipit, a error temporibus
        cupiditate esse dicta id facilis, sed quas sapiente repudiandae aperiam
        eligendi nesciunt. Eius dolorem nesciunt error repellendus ex aut
        nostrum dignissimos quas. Aliquid ad fuga maiores, obcaecati iure
        dignissimos asperiores assumenda quaerat facilis ut beatae tenetur
        rerum, officiis ab, et deleniti autem odio voluptatem atque? Sit iure
        ratione exercitationem! Nesciunt tempore fugit dignissimos cum excepturi
        iusto, accusantium commodi aperiam praesentium molestiae adipisci
        incidunt vel magni facere quo non exercitationem asperiores officia
        deleniti obcaecati minus sed nihil? Nostrum recusandae explicabo odit,
        quia sequi nemo assumenda, consequuntur voluptatem ipsa odio quasi
        cumque molestiae harum mollitia aperiam adipisci voluptatibus
        blanditiis? Doloremque dolore numquam iste quisquam quaerat consectetur
        aut? Assumenda ducimus quaerat fugit ipsum iste incidunt nostrum
        voluptates odio rem molestiae obcaecati iure quia qui itaque soluta
        voluptas, eveniet asperiores culpa doloremque aspernatur dolore,
        consequatur laborum. A unde perspiciatis deserunt illo vero, quos
        voluptates quasi dolore molestiae! Sequi, autem suscipit. Vel, unde.
        Magnam doloremque eum harum quae saepe, quidem non eos officiis itaque
        at! Vitae magnam vel architecto corporis nisi veritatis, voluptas
        doloribus expedita, officiis obcaecati non dicta quasi quas, hic quidem
        in odit aliquid ad fuga. Unde impedit corrupti at. Unde quibusdam velit
        voluptatem possimus blanditiis nemo in tempore! Officiis nostrum
        pariatur explicabo fugit magnam et atque cupiditate quidem quae ex
        voluptas at similique impedit fuga, ducimus corrupti sint est? Saepe
        asperiores aperiam nisi eos odit facere deleniti, ipsam maxime, neque at
        nemo quasi iusto? Nobis, sit. Quia, eaque, velit blanditiis deserunt,
        nesciunt distinctio veniam debitis quis consectetur harum vitae. Sed
        nostrum illum corrupti id adipisci rerum labore vel nihil quidem non,
        numquam cumque! Nulla nemo saepe commodi molestiae soluta in temporibus
        culpa mollitia, dolor, veritatis dignissimos voluptates molestias
        deserunt harum? Ab nesciunt inventore sint expedita, minima quod
        consequatur itaque! Quis corporis dolor vitae ratione, aspernatur,
        inventore ipsa commodi nesciunt suscipit maxime unde quasi blanditiis
        debitis consectetur voluptate qui voluptas facere distinctio omnis,
        harum rem autem. Nisi ratione perferendis aperiam dolore natus atque
        ipsam reprehenderit voluptates nesciunt iste, temporibus veniam dolores
        tempore quae explicabo beatae quibusdam minima earum rem, consequatur
        mollitia voluptas nulla! Vero esse qui voluptate, quo doloremque odio
        aperiam quisquam sunt quia, voluptatum distinctio a amet, perspiciatis
        in facilis aliquam voluptas maiores ipsam. Neque architecto, nulla
        suscipit, rerum cumque possimus dicta asperiores assumenda nam nesciunt
        maxime nisi fugit perferendis aliquid voluptatum, quam placeat rem eaque
        qui odit id molestias? Error, perferendis ullam. Sapiente possimus
        reiciendis officiis fugiat vitae deleniti repudiandae accusantium
        placeat? Assumenda, eos similique dolore, dolores deserunt aut sed
        facilis dignissimos sapiente voluptates consequatur? Optio aliquam quas
        corrupti necessitatibus! Recusandae magnam officia quam dolore ducimus,
        odit nesciunt cumque minima esse at perspiciatis saepe dolorum suscipit
        nam nulla blanditiis aperiam dolores molestias beatae iste possimus!
        Eligendi voluptate quo veritatis? Expedita nemo vitae esse
        exercitationem eum sit dolorum corrupti? Laudantium culpa fugit expedita
        porro. Reiciendis omnis labore ab, odio delectus vero neque alias.
        Excepturi reiciendis voluptas suscipit magni impedit laboriosam quod
        odio sed voluptates id, dolores cum perspiciatis dolor tempore quis
        quasi earum numquam molestiae omnis laborum autem dolorum. Magni dolorem
        ex explicabo illum soluta? Saepe tempora, maiores earum maxime fuga a
        eligendi quibusdam voluptatem quas perspiciatis porro nesciunt aut,
        laboriosam aliquid quaerat, nostrum laudantium quae! Excepturi dolore
        neque fugit sint suscipit sit sapiente, facilis aliquam, molestias
        repellendus consequuntur voluptas eaque beatae temporibus autem
        provident enim? Unde deleniti dolor debitis excepturi alias et, dolore
        error ipsa facilis blanditiis nesciunt ab eveniet esse in saepe
        reprehenderit. Magnam sint totam provident itaque fugit ullam sed ipsum
        vitae, expedita, dolorem, impedit dolor iste quam sunt vero distinctio
        rerum nulla harum nisi sequi dolorum? Mollitia adipisci voluptas at
        molestias expedita quaerat ex assumenda numquam eos a libero eaque culpa
        similique sed accusantium aut facere consequuntur blanditiis amet enim
        deserunt alias deleniti, iure consectetur! Tempore error, tempora a ad
        adipisci ipsa animi sequi, aspernatur rem voluptate magni iure beatae
        voluptates nostrum repellat! Eos ex provident saepe perspiciatis hic
        fugiat non atque nemo aliquid quos vitae mollitia enim necessitatibus
        doloribus numquam molestias, laboriosam ad quidem nihil iste
        voluptatibus esse similique dicta. Alias expedita dicta nostrum illo
        repudiandae suscipit. Repudiandae facere iste saepe ipsam. Eos velit eum
        excepturi, fugit necessitatibus inventore odit aspernatur non
        dignissimos veritatis quis temporibus facilis, blanditiis dolorem illum
        accusantium? Minus voluptatem expedita, esse quod maiores, vitae cumque
        et, mollitia dolorem sequi ad consectetur. Possimus harum provident
        numquam totam consectetur repellendus, nesciunt ut assumenda, cupiditate
        eum expedita vero. Dignissimos magni, doloribus nihil aspernatur
        consequuntur architecto a, libero reiciendis aperiam et eaque doloremque
        soluta iure laboriosam adipisci, nesciunt dolores repellat cum quae
        animi cupiditate vero. Asperiores reprehenderit delectus atque vero,
        iusto perspiciatis quisquam dignissimos beatae ipsam iure omnis, alias
        laboriosam quas autem ad, voluptatum quod placeat deserunt sed
        reiciendis consequatur quam enim. Placeat ratione necessitatibus vitae
        provident, fuga ducimus omnis illo, accusamus ex cum blanditiis expedita
        sequi voluptatum excepturi, molestias unde atque quia corporis
        recusandae a consequatur? Recusandae sequi laboriosam culpa rerum beatae
        non provident nostrum totam, error, cupiditate quaerat ex corporis, sit
        quam voluptates ducimus odio magnam assumenda modi adipisci autem rem
        temporibus ipsa dicta! Nemo eligendi autem, voluptatibus a debitis
        laboriosam saepe pariatur in qui. Recusandae rem iste animi amet quidem
        voluptate, possimus dolorum, pariatur labore reprehenderit illo harum?
        Ea eaque, tempora saepe odit quis debitis, recusandae repudiandae, sunt
        cum voluptate laboriosam esse nisi animi excepturi dolore? Omnis magnam
        necessitatibus porro commodi nisi accusamus sunt nulla eius quia, ullam
        fuga perferendis sapiente sint quisquam impedit, dolorem doloribus
        quasi, labore pariatur delectus. Molestiae, pariatur dolore ad modi,
        esse nobis incidunt autem magni neque cumque placeat eveniet! Molestiae
        quia facilis distinctio laboriosam blanditiis aut voluptatibus
        recusandae accusantium vitae, harum architecto consectetur iure dolorum,
        eos enim ullam iusto! Voluptatem error, fugiat tenetur at nemo nulla
        architecto? Error optio obcaecati at iusto unde accusamus quam quos
        soluta, tempore possimus ut dolor, asperiores numquam deserunt quibusdam
        a aperiam ipsa modi vero dolorum aut. Qui, reiciendis aspernatur! Vel,
        mollitia aliquid magnam modi a quidem dolore placeat atque aperiam minus
        necessitatibus explicabo pariatur id eos officia nobis ipsum dolor,
        optio corrupti. Libero, eos reiciendis. Ab laudantium dolor sapiente
        commodi magnam labore, voluptatem alias vero delectus accusantium
        incidunt, eius, quia ea nostrum magni corporis sed sint reiciendis ullam
        aliquam maiores aut veniam ipsum voluptatibus. Vitae inventore eaque id
        vel esse laudantium, facilis fugit tenetur libero suscipit at dolore
        veritatis ipsum laborum maiores, omnis beatae veniam. Praesentium
        adipisci aspernatur dolore debitis asperiores provident aperiam, quam
        nobis odio magnam ducimus dolores delectus vel laborum repellendus
        architecto? Odit modi magni eaque laborum fugit eveniet debitis
        temporibus vitae. Nisi perspiciatis tempore tempora incidunt modi
        nostrum eos molestiae odit, praesentium iure ducimus quasi alias ratione
        atque possimus? Nulla quis corporis eos consequatur asperiores iste
        quasi nemo impedit odit facilis ut maxime repellendus minima delectus
        quibusdam laudantium voluptates consectetur optio earum, neque officia
        magni obcaecati numquam natus. Officia, tempora quis! Voluptas, fugit a
        eligendi fuga consequuntur doloremque voluptatem ea iusto qui mollitia
        maxime explicabo possimus obcaecati delectus, iste nam enim, at sequi
        labore provident quas architecto pariatur. Illo at deserunt molestias
        facilis hic dolorum consequatur tenetur, cum cumque temporibus optio quo
        illum rem, atque adipisci, laboriosam doloribus tempora eos reiciendis
        nobis. At accusamus voluptas consectetur, quasi non architecto voluptate
        doloribus quaerat porro velit minus nisi adipisci incidunt quae
        voluptates qui libero reiciendis doloremque, dolores unde a ducimus odio
        voluptatum exercitationem. Dolorum qui non quae nostrum dolores magnam
        iste, perspiciatis fuga atque porro. Distinctio, quae, maiores nemo
        dolore voluptates ipsam ducimus maxime asperiores consectetur in magnam
        perspiciatis, quos ab amet sed. Consequuntur vitae molestias blanditiis?
        Doloribus voluptates dignissimos nulla sit aliquid modi quos. Commodi
        repellat sed quo dolorum quam enim a, odio perspiciatis deleniti minima
        eos vel asperiores alias accusantium facere, corrupti dicta suscipit.
        Perferendis autem minima facere dolorum delectus doloribus reprehenderit
        corporis sint laborum fugit distinctio ratione qui error nisi minus
        ipsa, obcaecati quaerat eaque mollitia fugiat aperiam enim fuga
        doloremque! Facere velit ipsa molestiae, maiores praesentium, ipsam
        dolore atque, harum error dolores est a tenetur dolorum. Expedita
        accusamus maiores exercitationem consequatur aperiam, fugit voluptatibus
        quas non tenetur sunt? Obcaecati natus amet assumenda aliquam quia
        dignissimos fuga minus, non quas fugiat tenetur voluptatibus commodi
        veniam voluptatem aliquid. Adipisci error illum dolorum distinctio velit
        neque facere quasi cum veritatis maxime dolor nesciunt animi amet,
        accusamus aperiam sunt assumenda reprehenderit saepe! Omnis dolores
        natus, nostrum corporis eaque aspernatur nesciunt architecto maxime,
        beatae, hic cumque et voluptatum eligendi vel unde porro? Accusamus
        reprehenderit rem deserunt sunt totam, aut iusto fuga, recusandae,
        libero fugiat cupiditate! Sunt id minus impedit eum animi labore modi
        corrupti amet maxime excepturi minima ut debitis, sit perferendis
        accusantium quam quos exercitationem nam ab vero aliquam aliquid cumque
        nisi accusamus. Deserunt id, soluta doloremque accusantium sint non
        nihil excepturi? Reiciendis natus at saepe ea, voluptatum ratione ullam
        nihil temporibus culpa tempore. Aliquid et labore sequi nostrum sunt
        quam odit? Consequatur, repudiandae! Nam eius iure ex consequatur dicta
        ullam dignissimos quaerat est eos atque ab id possimus, voluptatem
        corporis, cum sit omnis obcaecati consequuntur iusto ipsam ea nobis
        officiis. Nisi consequuntur aliquam temporibus officia itaque. Impedit
        dicta recusandae consequuntur mollitia perferendis aperiam pariatur
        alias doloremque provident, rem debitis voluptatem eos doloribus.
        Repudiandae unde perspiciatis sint minus distinctio totam sequi cum
        veritatis? Atque dolores excepturi, voluptatibus eos sint consequuntur
        natus voluptates delectus dignissimos dicta! Ex aperiam iusto explicabo
        cupiditate aliquam doloribus asperiores facere ipsam sint maxime.
        Reiciendis incidunt sequi obcaecati. Facere sequi sit aperiam illo.
        Illum dolorum eos maxime suscipit quasi! Iure mollitia distinctio
        tenetur nihil nam asperiores quo id sed voluptas optio. Ut ea itaque
        illum ad laboriosam iure esse eos dicta voluptas commodi neque illo
        recusandae veniam tenetur sed cumque rerum possimus, asperiores, ipsam
        veritatis deserunt enim! Illum quo cupiditate velit repellat nemo minus
        numquam in temporibus a tempora ratione facilis vitae accusantium
        aperiam quos, dolorem consequuntur delectus adipisci iste sapiente?
        Consectetur hic sequi fugit tempore, quis aut iure enim veniam expedita
        ad voluptates, aliquam odit quo tempora ea perferendis necessitatibus
        dolore excepturi autem sunt? Quod inventore perferendis unde quasi,
        doloribus, cum dignissimos laborum, quidem fugiat harum placeat? Tempora
        tempore molestias laudantium quia ipsam eaque accusamus fugiat, dolor
        corporis. Provident magni quod optio consectetur ipsum enim voluptatum
        nemo corrupti, in non, neque vero eaque! Velit beatae praesentium quod
        illum aut temporibus? Tenetur dicta veniam quo quis atque temporibus
        consequatur nemo aspernatur minima quisquam? Quasi amet, provident
        dolorum sunt accusantium aliquam aliquid, quam tempore aperiam repellat
        quod, exercitationem soluta. Qui molestiae dolores quam consectetur eum
        tempora libero praesentium quisquam saepe, illum voluptatibus hic
        expedita nisi perspiciatis tempore unde inventore in minus veniam error
        facilis soluta aut quis illo. Ipsa culpa sequi exercitationem totam at
        soluta placeat optio molestias rerum voluptates accusantium illo, dolor
        dicta. Amet omnis exercitationem doloribus labore itaque dolorum iste
        tempora suscipit quo, aliquid natus minima rerum similique ipsum eos
        asperiores error vel placeat! Doloribus officia ipsam possimus eum
        cumque illum ad, rem, ex quidem quod minima nisi a dolor delectus ut
        quisquam molestias aspernatur sequi natus dicta reprehenderit id quasi
        suscipit. Quae laudantium vel sed, ratione ad, eum repellat aut
        laboriosam quo, quia soluta? Necessitatibus eum, quo, harum quos beatae
        possimus expedita iusto, odit facere perspiciatis fugit aut! Soluta aut
        similique atque consequatur illum doloremque ullam, dolores ipsa porro
        explicabo impedit eum rem veritatis cum deleniti expedita modi. Aliquid
        eaque nesciunt soluta natus voluptas excepturi. Magnam, reiciendis dicta
        quos sunt labore, vitae similique autem ipsum tempora corrupti maiores
        dignissimos voluptas iste ut cum aliquid quia, nisi blanditiis. Officiis
        quibusdam nemo vel deserunt est sint voluptatum dolores obcaecati iste
        fuga accusamus voluptatem rerum voluptas, tempore natus libero. Earum
        optio iusto fuga? Explicabo, provident assumenda ea aliquam error
        officiis deleniti sint nisi doloribus totam sit odio voluptate?
        Praesentium ad nobis exercitationem, neque numquam dolorem esse modi
        distinctio. Distinctio soluta ullam quod odio minus quo blanditiis
        doloremque cum maxime laudantium. Maiores possimus aperiam eaque illum
        excepturi modi illo soluta dolore, numquam optio dolorem! Numquam, nihil
        et ullam praesentium porro repellat saepe voluptate id ipsam, rerum
        autem, maiores dolorum natus dolores itaque quo expedita accusamus qui.
        Dolorem ipsum labore architecto reprehenderit voluptates laboriosam
        eligendi? Est delectus modi voluptatem magni laudantium odit nemo culpa
        eius. Consequuntur facilis autem similique laudantium sed odio quia
        placeat iste deserunt fuga. Quae praesentium corrupti fuga explicabo
        aspernatur distinctio nesciunt, saepe assumenda repudiandae, quidem
        architecto. Dolorum repellendus id eos magnam iste quasi architecto quos
        pariatur quisquam dolore quam at suscipit, atque doloremque ipsum
        voluptatem dolorem ullam rem nam saepe cum aperiam. Aperiam, ad!
        Assumenda error labore, eum consectetur voluptas obcaecati nesciunt sint
        repellendus maiores neque delectus saepe quia praesentium cupiditate,
        sed aliquid eligendi a facere voluptatibus quasi autem alias ratione
        laboriosam minus. Dolorem minima minus fugiat incidunt doloribus ad
        perspiciatis culpa assumenda, distinctio eligendi adipisci porro ab
        excepturi aperiam corporis, quasi consequatur magni quibusdam commodi
        similique et delectus debitis voluptate vitae! Ea aliquam eius nemo
        adipisci quos nisi illo harum voluptates enim. Fugiat eum voluptas unde
        impedit provident velit in repudiandae laborum dolorem necessitatibus,
        obcaecati voluptatibus esse ipsum fuga odit similique, accusantium
        expedita, temporibus voluptatum illo dolor facere. Qui amet assumenda et
        inventore exercitationem quo fugiat rem, consectetur quod quasi quisquam
        officiis obcaecati ratione vero. Odio quia obcaecati excepturi expedita
        autem facilis asperiores, aspernatur sapiente quos neque rem aperiam
        quaerat explicabo maiores, aliquid iure? Inventore corrupti rerum
        veritatis suscipit mollitia amet omnis vel vitae perspiciatis provident
        pariatur voluptas aliquam nihil illum ipsam, exercitationem voluptatibus
        repudiandae odit ad quae. Odio ut a soluta nihil quidem ex fugiat nemo
        hic sed labore cupiditate illum repellendus perspiciatis veritatis nam
        aperiam itaque, sunt consequuntur dolor! Laudantium ad qui modi quaerat?
        Vero fugiat, voluptatem architecto doloribus tempore optio, modi, cumque
        corrupti quae ipsum illo odio officia nihil facere ducimus. Blanditiis
        voluptates repudiandae atque ipsam facere laboriosam recusandae suscipit
        optio rerum, reiciendis eius, aliquid incidunt illo esse vero veritatis
        dolores iusto dolorum aperiam? Dignissimos tempore nostrum incidunt
        earum debitis. Dolorum quam sapiente officiis hic dolorem rem fuga
        quidem libero, ea non aliquam sed at fugiat modi? Illo, repellat odio
        placeat soluta, consequuntur provident sapiente sint ad tenetur sunt ex
        beatae architecto! Tempora voluptate veritatis perferendis eaque debitis
        repudiandae ut maiores, unde cumque excepturi, quasi consequuntur,
        veniam fuga voluptatem nisi eligendi quo. Odio ut nam soluta ipsa,
        facere natus nostrum repudiandae voluptatum accusantium reprehenderit
        tempora similique eius iste cum consequatur suscipit veniam commodi
        obcaecati, in incidunt, quaerat ex. Voluptas labore doloribus at non
        eius magni quaerat ut nemo exercitationem enim, repellat velit
        perspiciatis aliquid placeat inventore doloremque incidunt praesentium
        veniam repellendus cumque similique quibusdam recusandae consequatur
        dignissimos! Voluptates eveniet nesciunt, facere laboriosam eum
        inventore, nemo alias, officiis distinctio odio vel harum tempora
        adipisci error necessitatibus. Iure sed quasi velit explicabo error
        voluptatibus. Quia corrupti quasi soluta molestiae alias placeat iusto
        odit. Laborum quia, a at et odit facilis doloribus voluptate, tempore ea
        eligendi reiciendis exercitationem modi quasi voluptatum aliquid fugiat
        doloremque, cumque soluta pariatur veniam! Ratione ex enim, expedita
        molestiae dolorem, explicabo nobis fuga totam voluptatum veritatis
        suscipit quis! Placeat, debitis? Deleniti excepturi ducimus laboriosam
        nisi culpa quaerat tempora deserunt dolorum odio quam eaque, ut
        laudantium, omnis enim quidem, debitis quibusdam? Quo, quidem,
        perspiciatis accusamus esse beatae saepe quas ex corporis vero
        blanditiis debitis sapiente molestias nisi voluptatem sint? Minima ad
        natus laboriosam recusandae, totam fugit et, odio eos doloremque
        obcaecati neque magnam beatae porro dicta nesciunt illo in officia
        temporibus reprehenderit quidem placeat culpa? Dolor, doloribus. Quasi
        reprehenderit laborum dicta rem perferendis, atque temporibus, sint amet
        ad voluptates soluta debitis, optio consequatur recusandae eaque in.
        Consectetur saepe delectus recusandae laudantium accusamus atque
        architecto ipsam odit aut incidunt! Veritatis molestias neque vel
        assumenda possimus totam sit tempore, rerum eveniet adipisci dicta ipsum
        incidunt atque ad. Aspernatur libero est, nemo quas distinctio veritatis
        molestiae. Debitis aliquam beatae obcaecati minima laborum excepturi nam
        at officia voluptatibus culpa ab fugiat, iusto ipsam natus ea dolores
        distinctio vitae sapiente delectus? Corrupti, suscipit fugit id quis
        fuga ipsam enim. Ratione expedita accusamus quas suscipit numquam nemo
        fugiat magnam corrupti facilis, in, sunt tempora cum distinctio delectus
        nulla soluta, quibusdam minus vero labore. Dolore aspernatur, aliquam
        earum est temporibus maiores veniam sit ullam saepe quos, assumenda
        laborum nobis blanditiis, recusandae voluptatibus vitae consectetur
        voluptate ratione numquam. Dolores, minima, voluptatibus repellendus
        magnam, quidem provident voluptas quis vitae maxime nostrum fugit nemo
        eaque unde eligendi asperiores molestiae tenetur consectetur natus.
        Ducimus culpa exercitationem doloribus itaque excepturi sint nostrum,
        quos quidem aspernatur nulla ipsam molestias. Temporibus quo tempora
        dolorum culpa, harum, quidem laborum enim hic id nam ullam unde. Ratione
        sit tempore placeat, eius laudantium in incidunt voluptatum illo
        molestias quia fuga sequi officiis ad nesciunt itaque architecto
        voluptatibus! Id molestias repellendus soluta dolorum tempore
        necessitatibus accusamus nostrum veniam obcaecati atque ex deleniti,
        quaerat laboriosam ipsam assumenda voluptatum unde hic enim minus
        consectetur quisquam doloremque dolor neque reprehenderit. Ipsum magni
        sint cumque voluptate blanditiis maxime culpa porro non exercitationem
        ab? Deserunt doloremque laudantium dicta dolor quam nisi inventore
        mollitia reprehenderit. Laborum possimus autem recusandae quasi.
        Voluptates ducimus voluptate illum pariatur assumenda placeat
        repellendus cupiditate, distinctio quo, dicta quaerat, officia porro!
        Unde in odit provident soluta delectus quaerat a nesciunt fugiat eius
        pariatur modi ratione iste distinctio repellat doloribus debitis ducimus
        sunt, nam eveniet. Porro dolor vel sit vitae, tempora animi quam ea
        numquam repellendus voluptates aliquam sed expedita perspiciatis, rerum
        facere et hic accusantium dolore praesentium odit earum consequatur
        mollitia libero. Dolor, obcaecati! Possimus nemo officia suscipit, quis
        architecto, illo asperiores magni a minus voluptate molestias, omnis
        consequatur esse ratione autem accusantium. Nostrum, voluptatibus
        veritatis fugit temporibus sed at eaque atque, rem saepe asperiores
        officia repellat soluta dicta! A ab excepturi fuga possimus ratione
        animi. Ut sed corrupti incidunt similique assumenda nostrum labore eaque
        distinctio temporibus qui. Possimus obcaecati non veritatis neque quae
        placeat suscipit, pariatur velit perferendis illo autem sequi
        dignissimos vitae aspernatur a corporis rem amet deserunt numquam ea sit
        voluptates deleniti. Vero explicabo nemo quae, ipsum similique, facilis
        repellat, quo distinctio architecto possimus aspernatur a consequatur
        expedita maiores dolorem ex quas. Exercitationem recusandae expedita
        adipisci earum at, reprehenderit temporibus suscipit nesciunt
        perferendis sit rem dolorem aliquam explicabo! Ab sint laudantium
        debitis voluptas quaerat fugiat maxime iusto hic dolorum iure quidem,
        aperiam itaque temporibus quos expedita velit adipisci asperiores eius
        consectetur similique veritatis exercitationem non dolores. Alias
        aliquam earum unde optio nemo, ducimus voluptatum sint perspiciatis
        voluptas error corporis eligendi consequuntur nam autem rem blanditiis
        non magnam repudiandae quo id itaque! Ab, provident! Ipsa rerum sequi
        temporibus delectus necessitatibus. Blanditiis quis iusto cumque
        adipisci minus odio deserunt soluta autem quae dolore?
      </span>
      <br />
      {user ? (
        <div>
          <h3>Welcome! {user}</h3>
          <button onClick={() => dispatch(handleLogout(navigate))}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
};

export default Home;
