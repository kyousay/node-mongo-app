import React from 'react'
import styled from 'styled-components'
import { mediaMobile } from '../../styles/common'
import { calculate } from '../../styles/common'
import {SectionTitle,TermsSectionTitle} from './SectionTitle'
import Button from './Button'
import {Section} from '../../styles/common'

const Paragragh = styled.p`
    margin-top: 40px;
    font-size: 1.5rem;
    color: #696969;
    line-height: 1.5;
    ${mediaMobile`
        font-size: ${calculate(15,320)}vw;
        margin-top: ${calculate(20,320)}vw;
    `}
`

const TermsParagragh = styled(Paragragh.withComponent('div'))`
    font-size: 1.2rem;
    line-height: 1.2;
    color: #696969;
    ${mediaMobile`
        font-size: ${calculate(10,320)}vw;
    `}
`

const TermsParagraghTitle = styled.span`
    display: block;
    padding-left: 20px;
    font-size: 1.2rem;
    line-height: 2;
    color: #696969;
    position:relative
    ${mediaMobile`
        font-size: ${calculate(12,320)}vw;
        padding-left: ${calculate(12,320)}vw;
    `}
    &::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        background-color: #FF1493;
        top: 8px;
        left: 3px;
        ${mediaMobile`
            top: 2.5vw;
            width: ${calculate(8,320)}vw;
            height: ${calculate(8,320)}vw;
        `}
    }
`

const List = styled.ul`
    margin-top: 30px;
    ${mediaMobile`
        margin-top: ${calculate(20,320)}vw;
    `}
`

const ListItem = styled.li`
    padding-left: 20px;
    position: relative
    ${mediaMobile`
        padding-left: ${calculate(15,320)}vw;
        line-height: 1.5;
    `}
    &:not(:first-child){
        margin-top: 10px;
        ${mediaMobile`
            margin-top: ${calculate(15,320)}vw;
        `}
    }
    &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        top: 5px;
        left: 5px;
        background-color: #888888;
        border-radius: 50%;
        ${mediaMobile`
            top: 1.8vw;
            width: ${calculate(5,320)}vw;
            height: ${calculate(5,320)}vw;
        `}
    }
`

export default () => {
    return(
        <>
            <Section>
                <SectionTitle title={"応募規約"} />
                <Paragragh>
                    株式会社乃木坂LCC（以下、「当社」といいます）が主催する
                    「乃木坂46・24thシングル「夜明けまで強がらなくていい」発売記念、メンバーグッズプレゼントキャンペーン」(以下、「本キャンペーン」といいます)
                    にご応募いただく前に、本規約をよくお読みいただき、ご同意のうえ、ご応募ください。本キャンペーンにご応募された場合、本規約に同意したものとみなします。
                </Paragragh>
            </Section>
            <Section>
                <TermsSectionTitle title={"規約"} />
            </Section>
                <TermsParagragh>
                    <TermsParagraghTitle>注意事項：</TermsParagraghTitle>
                    <p>パソコンまたはスマートフォンによりご参加いただけます</p>
                    <List>
                        <ListItem>１枚のレシートは１回限りのご利用となります。同じレシートを使用して複数回ご応募いただけません。</ListItem>
                        <ListItem>ご応募に使用する画像は個人情報が含まれないよう撮影してください。</ListItem>
                        <ListItem>クレジットカードでお買い上げの場合は、レシートのカード情報部分を塗りつぶしてアップロードしてください。</ListItem>
                        <ListItem>ご応募いただいた内容に関しての有効・無効のお問い合わせは受け付けておりません。</ListItem>
                        <ListItem>ご応募いただいた内容に関しての変更・取り消しはできません。</ListItem>
                    </List>
                </TermsParagragh>
                <TermsParagragh>
                    <TermsParagraghTitle>下記のようなレシート画像でのご応募は無効となりますのでご注意ください。</TermsParagraghTitle>
                    <List>
                        <ListItem>レシート画像が不明瞭な場合</ListItem>
                        <ListItem>「購入店舗名」「購入店電話番号」「購入日時」「購入商品名」「購入商品価格」「レシート合計金額」が判読できない場合</ListItem>
                        <ListItem>レシート画像が途中で切れている場合</ListItem>
                        <ListItem>１枚の画像にレシートが２枚以上写っている場合</ListItem>
                        <ListItem>同じレシートを使用して複数回応募を行なった場合</ListItem>
                        <ListItem>有効期間外のレシートで応募を行なった場合</ListItem>
                        <ListItem>応募レシートに不備があると主催者側(当社)が判断した場合</ListItem>
                    </List>
                </TermsParagragh>
                <TermsParagragh>
                    <TermsParagraghTitle>本キャンペーンへのご参加は、応募規約にご同意いただいた上でご参加いただくものとみなします。予め本注意事項をご一読の上、ご参加されますようよろしくお願い致します。</TermsParagraghTitle>
                    <List>
                        <ListItem>パソコン、スマートフォンからご応募の場合、ネットワークの混雑により、接続に時間がかかる場合がございます。</ListItem>
                        <ListItem>応募締切間近はアクセス集中等により繋がりにくくなる場合がございますので、お時間の余裕をもってご応募ください。</ListItem>
                        <ListItem>通信費用はお客さま負担となります。</ListItem>
                        <ListItem>ご応募時に誤入力いただく情報はSSLにより暗号化されて送信されます。</ListItem>
                        <ListItem>ご応募の住所入力ミス・登録後の住所変更につきご連絡がない等の事由により賞品が届かない場合、当選を取り消させていただく場合がございます。<br></br>
                        その他、ご応募に関して不正な行為があった場合、当選を取り消させていただく場合がございます。</ListItem>
                        <ListItem>メールソフトなどの設定により、弊社からのメールが迷惑メールとして振り分けられたり、メールが削除される場合がございます。設定をご確認の上、ご登録ください。<br></br>
                        メール指定着信、アドレス拒否設定をしている方は、@joqr.netからのメールを受信できるようにご設定ください。</ListItem>
                        <ListItem>ご応募に伴いご入力いただいた個人情報(郵便番号、住所、氏名、電話番号、メールアドレス)は、賞品の発送、応募者・当選者への諸連絡、重複当選の有無の確認に利用させていただきます。<br></br>
                        個人情報の管理責任者は当社です。</ListItem>
                        <ListItem>はがきや封書でのご応募は受け付けておりません。予めご了承ください。</ListItem>
                        <ListItem>当選者の長期不在や、賞品お届け先ご住所や転居先が不明などの理由により、賞品のお届けができない場合は、ご当選を無効とさせていただく場合がありますので、予めご了承ください。</ListItem>
                        <ListItem>主催者側(当社)は､登録･応募に伴う使用機器の損傷、通信における障害､損傷及び応募時の不具合等についての責任は一切負いかねます。</ListItem>
                        <ListItem>当社社員及び関係者は応募できません。</ListItem>
                        <ListItem>当社は、本キャンペーンに関する諸規定を作成し、利用を制約する権利を有しています。<br></br>
                        また、当社が必要と判断した場合、参加者に予告なくいつでも本キャンペーンに関する諸規定を改定することができるものとします。<br></br>
                        なお、参加者の行為により当社に損害が生じた場合、当社は当該参加者に対してその損害の賠償を請求することができます。</ListItem>
                        <ListItem>賞品の仕様は予告なく変わる可能性がございます。</ListItem>
                        <ListItem>本キャンペーンはやむを得ない事情により中止または内容が変更となる場合がございますので予めご了承ください。</ListItem>
                    </List>
                </TermsParagragh>
                <Button margin={60} />        
            </>
    )
}