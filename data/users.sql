CREATE OR REPLACE FUNCTION generate_object_id() RETURNS varchar AS $$
    DECLARE
        time_component bigint;
        machine_id bigint := FLOOR(random() * 16777215);
        process_id bigint;
        seq_id bigint := FLOOR(random() * 16777215);
        result varchar:= '';
    BEGIN
        SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp())) INTO time_component;
        SELECT pg_backend_pid() INTO process_id;

        result := result || lpad(to_hex(time_component), 8, '0');
        result := result || lpad(to_hex(machine_id), 6, '0');
        result := result || lpad(to_hex(process_id), 4, '0');
        result := result || lpad(to_hex(seq_id), 6, '0');
        RETURN result;
    END;
$$ LANGUAGE PLPGSQL;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS entities;
DROP TABLE IF EXISTS products;

create table users (
	_id varchar(24) NOT NULL DEFAULT generate_object_id(),
	username VARCHAR(50) PRIMARY KEY,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL
);

create table entities (
	_id varchar(24) NOT NULL DEFAULT generate_object_id(),
	username VARCHAR(50) PRIMARY KEY,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL
);

create table products (
    _id varchar(24) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20eb', 'Wilek', '$2a$04$gFV8SwSMf9jzfx5Gax2x9eJ/o1dtxa3WMbMxbbDvN2cpzhHdn/KFy', 'wlannin0@admin.ch');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ec', 'Neville', '$2a$04$VrmVSPIcSEgMV/kW6yo/GugiuIWDNAHYQEky0X6ic/eYyOrggKdMy', 'nlawlor1@dailymotion.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ed', 'Alic', '$2a$04$y4G4V3/gvvBijJ0HzdqtGuSuTf4bCz3ucOsEz24T3oUtLFTquLaLG', 'astokoe2@hc360.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ee', 'Noellyn', '$2a$04$uqmJvgdRxfS5amtuZu3VZu4ftuZZV3hMGXIX6ze/2VaagJ/E14vCW', 'nadame3@alibaba.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ef', 'Richy', '$2a$04$fwZsy.IEwxTV9i8zIKpEGOn1xO5eWhIL8V9KefJN9Q5bxVQOtVQO6', 'rtesmond4@etsy.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f0', 'Marena', '$2a$04$WxXUU3Ni9oX5xrvpqM/RlOq5d17x8y5Gz3.H/LgZ0DmHXJpc5M.YK', 'mgoodright5@dagondesign.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f1', 'Bernice', '$2a$04$zmDsdhLN1ZhRqfcBli7K8ualPeOC1efVDp04XiolFg81rOUO/jL3a', 'brosenfarb6@dell.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f2', 'Audra', '$2a$04$wV9njvlAIh118jeBSDlkjeo4jkedwUTblbrpSAOHjNnTpXa4uIhBa', 'agillan7@epa.gov');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f3', 'Nicholle', '$2a$04$iBN1MGyUKBB8Prj52BX..eYA3lX8hUQlxENBwRMih8Ax81whJXuaW', 'ncheetham8@so-net.ne.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f4', 'Malachi', '$2a$04$7ipQpGevDpXX4/BjCR0o9OZESlcc4ucZjhYj/6pHvDakNh21lVwYa', 'mleyman9@youku.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f5', 'Chuck', '$2a$04$OehNrsga3sascvMzjZYRzu5vA7/sodhrsukW0G7B4klqhUsUaWovG', 'cmarta@hostgator.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f6', 'Ulberto', '$2a$04$meeB5mXstw.agV5IbvSnWuxDcENlHoZA9V48ApMvLZ7n4wMb4eupG', 'ubrackb@time.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f7', 'Christoffer', '$2a$04$Tpovq/U29YzAiNUWL.u9JO9FJYs8UkbXo.k6loJ6QSEFMKIKQX67a', 'cbrocktonc@acquirethisname.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f8', 'Consuela', '$2a$04$muGIZQg5kWD1sH4Cdq9XtuTdRLMpGsaxf12Y2hEPhJLVv6QC8YZhC', 'chaskerd@sbwire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20f9', 'Crosby', '$2a$04$RB0RZq2S78h8AGpCFuEAoOL7xvFOeNRI61EcwEnBAp1tGwE/RJ4GC', 'czammette@yahoo.co.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fa', 'Scarlet', '$2a$04$JmBIy3ofvhH/CI45l9LJ7e2nxoI5Jsy9RWbQw/DKXHpOx9aUCYRMO', 'seaglef@rediff.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fb', 'Olvan', '$2a$04$AvFaqnEtcyPtNTD9kiCw4e/H6P2OuOhi603Utojqz6jZvM1eC3LuC', 'owaghorneg@google.co.uk');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fc', 'Henrieta', '$2a$04$6CUr.QH/xCCtgHZYV1xq1Oa3sgFkHls9go2u.cfXe0WO2sSpXQFbe', 'htunaclifth@a8.net');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fd', 'Padraig', '$2a$04$dcWoybOed2TjPGKcAd5E1.d21aCpnnt9ytDckcv8jcF9.jEWe.aiq', 'pkelletti@ox.ac.uk');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20fe', 'Kandy', '$2a$04$KCwVuB8Z9oE/rqkmMxO16Om2dKWfycjHAwBIEFclNNKPh9wKts5vq', 'kguerrij@google.pl');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa20ff', 'Silvan', '$2a$04$0XCIoaqWbvh4/sEAPlUQaOfSqMFkjdV./JDbRtOmMZfIJXc6PVoIu', 'sphilippk@chicagotribune.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2100', 'Cleopatra', '$2a$04$bFbaht8HQlfvJ6tGC5rHFeNbBm9Z6JqIsu.AGbZt7K1s05eacQ0Xe', 'cantonellil@merriam-webster.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2101', 'Electra', '$2a$04$7SezEGY.khASXbUMetxaJeLNj.yynbiqRB.TEI5hj0scFOqFFjyZe', 'ebouldingm@wisc.edu');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2102', 'Glenda', '$2a$04$uf9rXmcBFF3UxhEGWaHozel4qcoDPytXpw93QQxOXicChqPtWooo.', 'galderseyn@accuweather.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2103', 'Stanislas', '$2a$04$OwOXuTsf1zztA.HetDIrhO3MCBGD1gkjq33ODUxpPhBpyhYaMKpPu', 'sfrancklyno@techcrunch.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2104', 'Aila', '$2a$04$zFXQBgfk4hMzyiPp3YfVr.OuwD/JkW.h6dFI2OlJoOjE/dE4kClFe', 'ableadenp@odnoklassniki.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2105', 'Cortney', '$2a$04$czqAwmN0npRojZjuZioL5O417PRLJOODyptNNto2mTb.6gWekKnxW', 'cmeanwellq@reference.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2106', 'Gwynne', '$2a$04$8a5UPYPpbJMxQ1rjBkRhseEu/FFJ6oPJ7jeVw13MvqPdsO0PRFVO2', 'glebelr@intel.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2107', 'Thurston', '$2a$04$fN7ZF2OSWshtAhTQGgoYsuAsyXtHIJeZMqWlRfKCg6V0TKoeRj80W', 'tfaloons@cafepress.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2108', 'Leese', '$2a$04$iY1meIHoNNcmEgyraikVKudpNTHp8PGXUm8HL8MSUYIOJICJ.Ao.u', 'lkeppelt@indiegogo.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2109', 'Barbabas', '$2a$04$xfc9/DLHWQqsMIN5dH7lu.jH.hafqKFP7Nd3vnC0cORoxS3x9Oy4i', 'blanstonu@dagondesign.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210a', 'Donetta', '$2a$04$oTSYm8z2GsWT4bRfOSUN1ODoagTG4Yf9WLtkV1iM4TTKgO/pqTJfW', 'dwiggamv@angelfire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210b', 'Leilah', '$2a$04$MgilxGSXBAJ6pvDZ.DsDe.nGCk1pD.qQnUDm54yhg1yfouU5cM/Zy', 'lgiraudotw@rambler.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210c', 'Frederigo', '$2a$04$wPAxM1yiaPUjHaK0MouN7.G2u06EG25Q.TL2el2q3lExyYYIom5iu', 'fzannotellix@dropbox.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210d', 'Ulrick', '$2a$04$e5KIOYUNU3l9O5xC38gWN.cChBQ/.eNbqFGHXvopArWQQ4q38klHK', 'udarkery@plala.or.jp');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210e', 'Odilia', '$2a$04$g6aiaZ.EErQhZ1uEb0mrsOPxhyNN9zo2w.CWhRtwTllEro03oEBUW', 'osharplingz@elpais.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa210f', 'Nomi', '$2a$04$vyuJT30T6PAI.vFbqnOiF.OqlvCnH5jmBEV8s81Jxnem4DRSmdOIC', 'ntisun10@artisteer.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2110', 'Silvano', '$2a$04$OUILoQ91RlIZ3QOpn9XIxuHm.r26a0umz57dueBMWPWjHlC928m5C', 'sairton11@ucoz.ru');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2111', 'Merry', '$2a$04$EnmJIlRjiPsyBgEy6LprHe/KBtx8w4Tf9FjFJUHfsEH9g.YLnJY4W', 'mkettlestringe12@auda.org.au');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2112', 'Darice', '$2a$04$3LMJj/IFXwdi4ZqanItFIOQ3aq8vt4Mfwe.rwC/5zIJfyn3QvqAsq', 'diacofo13@merriam-webster.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2113', 'Melli', '$2a$04$DN5OfgKU.JT9J2c3M3K95.vmzeno9hcwtMNJO/v7halL5gvfmDQj2', 'mlilleycrop14@mysql.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2114', 'Glynda', '$2a$04$KZbZ4Aq8b3syqVyYcT.oPuM0XIgqRUhl5vL6I3tv19RFXsWrjiqTm', 'ggrealey15@discovery.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2115', 'Ginnie', '$2a$04$IBtcf0v4A83MaVvXCAREeuRB1uhntv5UhaSN0SYMic/ROVkaEpVpi', 'gbadman16@soundcloud.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2116', 'Tedie', '$2a$04$QxtBWTh5eKMiLYU1k7K4IeIUgSqt5HQp1kK2CrhEualQ29oOIrR8C', 'ttoffoloni17@theguardian.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2117', 'Babette', '$2a$04$ctdERfcYKMpEwv4PdUeuT.AiH1.6XNUZS.7I2/a1OiW6sMAUUDQuO', 'bmitkin18@reference.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2118', 'Deane', '$2a$04$wGgEYJrUz2njveRVf8jxHuGV.5SIrGCJttLu1nSMJ215zbkhdPrYm', 'degre19@businesswire.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa2119', 'Reamonn', '$2a$04$VHakyBhZ3ebEcnZy4LQo6.6.DJLLpZkBUZk.oFfuINIedIyLl1f6C', 'rstrelitzki1a@baidu.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211a', 'Aigneis', '$2a$04$d/d3niuEAJIreq/OriUElOpDsMGIWQVjMahJHYwDBXVIqFcmXtz..', 'abygrave1b@nbcnews.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211b', 'Marven', '$2a$04$6NIJKxav510sdRN1TseGverZzwxvoHMotZTnwMDR3uXZazpAH5OjO', 'mburet1c@hugedomains.com');
insert into users (_id, username, password, email) values ('65757316fc13ae561bfa211c', 'Dorette', '$2a$04$RiqckewgZWBFj2jNYikcjeP.Jix16XQ3eRItgBaQ5tD0DfBH62B4G', 'drayner1d@deliciousdays.com');



insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20eb', 'Wilek', '$2a$04$gFV8SwSMf9jzfx5Gax2x9eJ/o1dtxa3WMbMxbbDvN2cpzhHdn/KFy', 'wlannin0@admin.ch');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ec', 'Neville', '$2a$04$VrmVSPIcSEgMV/kW6yo/GugiuIWDNAHYQEky0X6ic/eYyOrggKdMy', 'nlawlor1@dailymotion.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ed', 'Alic', '$2a$04$y4G4V3/gvvBijJ0HzdqtGuSuTf4bCz3ucOsEz24T3oUtLFTquLaLG', 'astokoe2@hc360.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ee', 'Noellyn', '$2a$04$uqmJvgdRxfS5amtuZu3VZu4ftuZZV3hMGXIX6ze/2VaagJ/E14vCW', 'nadame3@alibaba.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ef', 'Richy', '$2a$04$fwZsy.IEwxTV9i8zIKpEGOn1xO5eWhIL8V9KefJN9Q5bxVQOtVQO6', 'rtesmond4@etsy.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f0', 'Marena', '$2a$04$WxXUU3Ni9oX5xrvpqM/RlOq5d17x8y5Gz3.H/LgZ0DmHXJpc5M.YK', 'mgoodright5@dagondesign.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f1', 'Bernice', '$2a$04$zmDsdhLN1ZhRqfcBli7K8ualPeOC1efVDp04XiolFg81rOUO/jL3a', 'brosenfarb6@dell.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f2', 'Audra', '$2a$04$wV9njvlAIh118jeBSDlkjeo4jkedwUTblbrpSAOHjNnTpXa4uIhBa', 'agillan7@epa.gov');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f3', 'Nicholle', '$2a$04$iBN1MGyUKBB8Prj52BX..eYA3lX8hUQlxENBwRMih8Ax81whJXuaW', 'ncheetham8@so-net.ne.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f4', 'Malachi', '$2a$04$7ipQpGevDpXX4/BjCR0o9OZESlcc4ucZjhYj/6pHvDakNh21lVwYa', 'mleyman9@youku.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f5', 'Chuck', '$2a$04$OehNrsga3sascvMzjZYRzu5vA7/sodhrsukW0G7B4klqhUsUaWovG', 'cmarta@hostgator.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f6', 'Ulberto', '$2a$04$meeB5mXstw.agV5IbvSnWuxDcENlHoZA9V48ApMvLZ7n4wMb4eupG', 'ubrackb@time.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f7', 'Christoffer', '$2a$04$Tpovq/U29YzAiNUWL.u9JO9FJYs8UkbXo.k6loJ6QSEFMKIKQX67a', 'cbrocktonc@acquirethisname.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f8', 'Consuela', '$2a$04$muGIZQg5kWD1sH4Cdq9XtuTdRLMpGsaxf12Y2hEPhJLVv6QC8YZhC', 'chaskerd@sbwire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20f9', 'Crosby', '$2a$04$RB0RZq2S78h8AGpCFuEAoOL7xvFOeNRI61EcwEnBAp1tGwE/RJ4GC', 'czammette@yahoo.co.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fa', 'Scarlet', '$2a$04$JmBIy3ofvhH/CI45l9LJ7e2nxoI5Jsy9RWbQw/DKXHpOx9aUCYRMO', 'seaglef@rediff.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fb', 'Olvan', '$2a$04$AvFaqnEtcyPtNTD9kiCw4e/H6P2OuOhi603Utojqz6jZvM1eC3LuC', 'owaghorneg@google.co.uk');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fc', 'Henrieta', '$2a$04$6CUr.QH/xCCtgHZYV1xq1Oa3sgFkHls9go2u.cfXe0WO2sSpXQFbe', 'htunaclifth@a8.net');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fd', 'Padraig', '$2a$04$dcWoybOed2TjPGKcAd5E1.d21aCpnnt9ytDckcv8jcF9.jEWe.aiq', 'pkelletti@ox.ac.uk');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20fe', 'Kandy', '$2a$04$KCwVuB8Z9oE/rqkmMxO16Om2dKWfycjHAwBIEFclNNKPh9wKts5vq', 'kguerrij@google.pl');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa20ff', 'Silvan', '$2a$04$0XCIoaqWbvh4/sEAPlUQaOfSqMFkjdV./JDbRtOmMZfIJXc6PVoIu', 'sphilippk@chicagotribune.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2100', 'Cleopatra', '$2a$04$bFbaht8HQlfvJ6tGC5rHFeNbBm9Z6JqIsu.AGbZt7K1s05eacQ0Xe', 'cantonellil@merriam-webster.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2101', 'Electra', '$2a$04$7SezEGY.khASXbUMetxaJeLNj.yynbiqRB.TEI5hj0scFOqFFjyZe', 'ebouldingm@wisc.edu');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2102', 'Glenda', '$2a$04$uf9rXmcBFF3UxhEGWaHozel4qcoDPytXpw93QQxOXicChqPtWooo.', 'galderseyn@accuweather.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2103', 'Stanislas', '$2a$04$OwOXuTsf1zztA.HetDIrhO3MCBGD1gkjq33ODUxpPhBpyhYaMKpPu', 'sfrancklyno@techcrunch.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2104', 'Aila', '$2a$04$zFXQBgfk4hMzyiPp3YfVr.OuwD/JkW.h6dFI2OlJoOjE/dE4kClFe', 'ableadenp@odnoklassniki.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2105', 'Cortney', '$2a$04$czqAwmN0npRojZjuZioL5O417PRLJOODyptNNto2mTb.6gWekKnxW', 'cmeanwellq@reference.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2106', 'Gwynne', '$2a$04$8a5UPYPpbJMxQ1rjBkRhseEu/FFJ6oPJ7jeVw13MvqPdsO0PRFVO2', 'glebelr@intel.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2107', 'Thurston', '$2a$04$fN7ZF2OSWshtAhTQGgoYsuAsyXtHIJeZMqWlRfKCg6V0TKoeRj80W', 'tfaloons@cafepress.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2108', 'Leese', '$2a$04$iY1meIHoNNcmEgyraikVKudpNTHp8PGXUm8HL8MSUYIOJICJ.Ao.u', 'lkeppelt@indiegogo.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2109', 'Barbabas', '$2a$04$xfc9/DLHWQqsMIN5dH7lu.jH.hafqKFP7Nd3vnC0cORoxS3x9Oy4i', 'blanstonu@dagondesign.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210a', 'Donetta', '$2a$04$oTSYm8z2GsWT4bRfOSUN1ODoagTG4Yf9WLtkV1iM4TTKgO/pqTJfW', 'dwiggamv@angelfire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210b', 'Leilah', '$2a$04$MgilxGSXBAJ6pvDZ.DsDe.nGCk1pD.qQnUDm54yhg1yfouU5cM/Zy', 'lgiraudotw@rambler.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210c', 'Frederigo', '$2a$04$wPAxM1yiaPUjHaK0MouN7.G2u06EG25Q.TL2el2q3lExyYYIom5iu', 'fzannotellix@dropbox.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210d', 'Ulrick', '$2a$04$e5KIOYUNU3l9O5xC38gWN.cChBQ/.eNbqFGHXvopArWQQ4q38klHK', 'udarkery@plala.or.jp');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210e', 'Odilia', '$2a$04$g6aiaZ.EErQhZ1uEb0mrsOPxhyNN9zo2w.CWhRtwTllEro03oEBUW', 'osharplingz@elpais.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa210f', 'Nomi', '$2a$04$vyuJT30T6PAI.vFbqnOiF.OqlvCnH5jmBEV8s81Jxnem4DRSmdOIC', 'ntisun10@artisteer.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2110', 'Silvano', '$2a$04$OUILoQ91RlIZ3QOpn9XIxuHm.r26a0umz57dueBMWPWjHlC928m5C', 'sairton11@ucoz.ru');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2111', 'Merry', '$2a$04$EnmJIlRjiPsyBgEy6LprHe/KBtx8w4Tf9FjFJUHfsEH9g.YLnJY4W', 'mkettlestringe12@auda.org.au');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2112', 'Darice', '$2a$04$3LMJj/IFXwdi4ZqanItFIOQ3aq8vt4Mfwe.rwC/5zIJfyn3QvqAsq', 'diacofo13@merriam-webster.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2113', 'Melli', '$2a$04$DN5OfgKU.JT9J2c3M3K95.vmzeno9hcwtMNJO/v7halL5gvfmDQj2', 'mlilleycrop14@mysql.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2114', 'Glynda', '$2a$04$KZbZ4Aq8b3syqVyYcT.oPuM0XIgqRUhl5vL6I3tv19RFXsWrjiqTm', 'ggrealey15@discovery.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2115', 'Ginnie', '$2a$04$IBtcf0v4A83MaVvXCAREeuRB1uhntv5UhaSN0SYMic/ROVkaEpVpi', 'gbadman16@soundcloud.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2116', 'Tedie', '$2a$04$QxtBWTh5eKMiLYU1k7K4IeIUgSqt5HQp1kK2CrhEualQ29oOIrR8C', 'ttoffoloni17@theguardian.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2117', 'Babette', '$2a$04$ctdERfcYKMpEwv4PdUeuT.AiH1.6XNUZS.7I2/a1OiW6sMAUUDQuO', 'bmitkin18@reference.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2118', 'Deane', '$2a$04$wGgEYJrUz2njveRVf8jxHuGV.5SIrGCJttLu1nSMJ215zbkhdPrYm', 'degre19@businesswire.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa2119', 'Reamonn', '$2a$04$VHakyBhZ3ebEcnZy4LQo6.6.DJLLpZkBUZk.oFfuINIedIyLl1f6C', 'rstrelitzki1a@baidu.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211a', 'Aigneis', '$2a$04$d/d3niuEAJIreq/OriUElOpDsMGIWQVjMahJHYwDBXVIqFcmXtz..', 'abygrave1b@nbcnews.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211b', 'Marven', '$2a$04$6NIJKxav510sdRN1TseGverZzwxvoHMotZTnwMDR3uXZazpAH5OjO', 'mburet1c@hugedomains.com');
insert into entities (_id, username, password, email) values ('65757316fc13ae561bfa211c', 'Dorette', '$2a$04$RiqckewgZWBFj2jNYikcjeP.Jix16XQ3eRItgBaQ5tD0DfBH62B4G', 'drayner1d@deliciousdays.com');



insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20b9', 'Cold Head Congestion Daytime Non-Drowsy', 'Integer a nibh. In quis justo.', 29.61, 95, '2023-12-28 15:56:58');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ba', 'North Cough Drop', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 12.37, 9, '2023-08-08 17:50:59');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bb', 'Suave', 'Quisque porta volutpat erat.', 64.97, 143, '2023-07-30 01:10:51');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bc', 'Quetiapine Fumarate', 'Mauris lacinia sapien quis libero.', 45.9, 78, '2023-03-28 05:53:39');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bd', 'ONDANSETRON HYDROCHLORIDE', 'Nulla nisl.', 45.17, 49, '2023-08-20 17:52:29');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20be', 'Parathyroplex', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 91.56, 102, '2023-04-09 14:35:29');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20bf', 'Oxycodone hydrochloride and Ibuprofen', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 20.39, 0, '2023-04-10 16:49:20');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c0', 'PAROXETINE', null, 46.33, 53, '2023-09-01 08:05:41');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c1', 'Tikosyn', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 22.21, 52, '2023-03-26 17:07:27');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c2', 'Good sense sleep aid', 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 5.9, 117, '2023-08-22 03:58:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c3', 'Nifedipine', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 76.11, 24, '2023-03-22 12:19:22');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c4', 'PREPOPIK', null, 49.86, 145, '2023-12-25 09:14:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c5', 'Lidocaine Hydrochloride and Epinephrine', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 18.85, 13, '2023-10-03 15:20:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c6', 'IC-Green', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 51.88, 126, '2023-08-05 03:01:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c7', 'Laxative', 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', 38.48, 86, '2023-03-26 04:43:54');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c8', 'Balmex Diaper Rash Stick', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 83.93, 92, '2023-03-18 14:18:06');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20c9', 'Standardized Grass Pollen, Sweet Vernal Grass', null, 65.34, 6, '2023-02-05 05:28:15');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ca', 'Ibuprofen and Diphenhydramine Citrate', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 80.94, 75, '2023-04-24 05:29:21');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cb', 'Prazosin Hydrochloride', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 22.74, 17, '2023-09-05 15:41:45');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cc', 'Leader Kids', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 68.19, 85, '2023-06-29 01:57:53');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cd', 'Hive Away', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 34.82, 122, '2023-02-09 03:53:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ce', 'Carvedilol', 'Integer a nibh.', 16.37, 93, '2023-08-23 13:58:38');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20cf', 'Levetiracetam', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 39.68, 140, '2023-01-24 23:48:38');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d0', 'RITE AID RENEWAL', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 55.89, 26, '2023-11-29 20:16:50');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d1', 'Degree', 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 42.71, 146, '2023-10-04 03:07:22');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d2', 'Anti-Diarrheal', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', 3.19, 6, '2023-04-21 20:59:14');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d3', 'Hydralazine Hydrochloride', 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', 63.09, 142, '2023-04-27 03:53:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d4', 'Ulta Sparkling Lemon Anti-Bacterial Deep Cleansing', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 3.4, 130, '2023-12-15 01:40:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d5', 'DRONABINOL', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 20.1, 14, '2023-10-30 16:43:20');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d6', 'Imipramine Hydrochloride', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 94.38, 7, '2023-10-27 12:21:36');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d7', 'Proactiv', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 19.25, 15, '2023-02-18 23:49:51');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d8', 'Sufentanil Citrate', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 57.18, 26, '2023-11-24 08:51:44');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20d9', 'ZANG QI', 'Donec vitae nisi.', 25.24, 18, '2023-08-09 18:55:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20da', 'Hydrocortisone', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', 23.13, 36, '2023-05-15 17:56:24');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20db', 'Enoxaparin sodium', 'Nullam molestie nibh in lectus. Pellentesque at nulla.', 49.68, 73, '2023-08-05 20:15:09');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20dc', 'Allergy Eye Relief', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 93.92, 46, '2023-01-24 21:25:15');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20dd', 'Cerebellum Thalamus B Aurum', 'Pellentesque at nulla.', 27.49, 107, '2023-10-20 09:30:01');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20de', 'PRINIVIL', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 22.03, 119, '2023-03-21 03:13:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20df', 'VIRACEPT', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 82.06, 79, '2023-03-01 08:36:04');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e0', 'NEXT 1 Anti-bacterial', 'Aliquam sit amet diam in magna bibendum imperdiet.', 24.74, 44, '2023-06-28 19:35:23');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e1', 'Carbinoxamine Maleate', 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 81.89, 31, '2023-09-30 13:39:24');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e2', 'Epzicom', 'In hac habitasse platea dictumst.', 92.94, 98, '2023-10-26 06:19:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e3', 'American Beech', null, 73.39, 31, '2023-11-11 12:19:11');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e4', 'Strength M', null, 93.37, 54, '2023-09-21 14:50:47');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e5', 'triamcinolone acetonide', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 19.8, 66, '2023-05-20 12:06:40');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e6', 'Metoclopramide Hydrochloride', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 13.51, 8, '2023-02-26 17:29:19');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e7', 'Escitalopram', 'Duis at velit eu est congue elementum.', 81.03, 15, '2023-11-07 13:11:10');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e8', 'CELEBREX', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 68.73, 131, '2023-05-22 03:05:53');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20e9', 'MARVEL ULTIMATE SPIDER-MAN ANTIBACTERIAL HAND WIPES', 'Praesent blandit lacinia erat.', 25.65, 93, '2023-08-20 06:34:07');
insert into products (_id, name, description, price, quantity, created_at) values ('6591464efc13ae0a31fa20ea', 'Banana Boat Ultra Defense Sheer Protect FPS 50 LATAM', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 76.99, 149, '2023-04-10 13:05:50');
