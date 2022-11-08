export default [
  "Delivered-To: test@gmail.com\n" +
    "Received: by 2002:a4a:765c:0:0:0:0:0 with SMTP id w28csp2093468ooe;\n" +
    "        Fri, 5 Feb 2021 00:43:13 -0800 (PST)\n" +
    "X-Google-Smtp-Source: ABdhPJz/Ii1qmc8qJeqJy7qNy1dWnj5Pi8EFf/1RRzUnopEBDNERYE7I7TDH220KXyPjI0yqJV1u\n" +
    "X-Received: by 2002:ad4:5981:: with SMTP id ek1mr3218226qvb.48.1612514593752;\n" +
    "        Fri, 05 Feb 2021 00:43:13 -0800 (PST)\n" +
    "ARC-Seal: i=1; a=rsa-sha256; t=1612514593; cv=none;\n" +
    "        d=google.com; s=arc-20160816;\n" +
    "        b=iaREVTEPrJxNRD0db4gh0hUIIb9plwaTsj9IAH9VqaktBZQZNIWvpLCRdaxgGzgwda\n" +
    "         Vqajq0hdiBc7mZrxbS85XBs+W+eZE2PRCgRRLUtdPMW/u/dqr/YA0vv9TgnsGebwQG/+\n" +
    "         h8j34EZILWaQcBYwGBWUrCVGWa5PPi4q3HHIFLC1iquf+NEWVhOgSvkKUX8tvr7xJeHf\n" +
    "         4AT9Dlsqr1FC6WZtzKYHCwFmi1GHQN2OfehrgHiLngDXcB4h5Rn42GkL12xoOClAJ4/F\n" +
    "         nGdWdRe2EpNGdfa3KVaAFm9mBVRXOowILdk6evrApGLRp1XcBxQy6JipBMTDjLFu61sw\n" +
    "         Y+OQ==\n" +
    "ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\n" +
    "        h=list-unsubscribe:list-post:list-archive:list-id:precedence\n" +
    "         :content-transfer-encoding:mime-version:subject:message-id:cc:to\n" +
    "         :reply-to:from:date:dkim-signature;\n" +
    "        bh=0uA4p1NRKG/QhsQaSakM00zSCk+xkm/ax2YoyJlnSlM=;\n" +
    "        b=vr35ibHn8dFo8UoEsvh2X8OWOx/974OLncTBGozkseo++zAgNAJ7N+tSRAmC0He0bW\n" +
    "         EMGtCtB5GeI3/wAbDdqAQ40D9tVeZfECW6ftG4i6VvgA89r2pHSI6eBCaEp/ZQZel/+T\n" +
    "         LJlU1b3OxHdyRgGIEwVSkL5vjPVhs4qS4zOH9GVPC4Wxdd8Mvk/jRLiyooDXrlyBKnEw\n" +
    "         4jRKGYZcF3NHHeEbuqG0+BSQzheyfmgshH11poxeIDmuBvFRZVwUjwKT5C+pBYowaMxT\n" +
    "         jHTC59BJykW/Ykv1wu4gW4++Mu2oPdWtAVqJ/ilmYTy3Jwper2jzlcTmoUuqf3z3Le4N\n" +
    "         KPjQ==\n" +
    "ARC-Authentication-Results: i=1; mx.google.com;\n" +
    "       dkim=pass (test mode) header.i=@github.com header.s=pf2014 header.b=iqLTObwi;\n" +
    "       spf=pass (google.com: domain of noreply@github.com designates 192.30.252.200 as permitted sender) smtp.mailfrom=noreply@github.com;\n" +
    "       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=github.com\n" +
    "Return-Path: <noreply@github.com>\n" +
    "Received: from smtp.github.com (out-17.smtp.github.com. [192.30.252.200])\n" +
    "        by mx.google.com with ESMTPS id fe4si4089692qvb.110.2021.02.05.00.43.13\n" +
    "        for <seomasterweb@gmail.com>\n" +
    "        (version=TLS1_2 cipher=ECDHE-ECDSA-CHACHA20-POLY1305 bits=256/256);\n" +
    "        Fri, 05 Feb 2021 00:43:13 -0800 (PST)\n" +
    "Received-SPF: pass (google.com: domain of noreply@github.com designates 192.30.252.200 as permitted sender) client-ip=192.30.252.200;\n" +
    "Authentication-Results: mx.google.com;\n" +
    "       dkim=pass (test mode) header.i=@github.com header.s=pf2014 header.b=iqLTObwi;\n" +
    "       spf=pass (google.com: domain of noreply@github.com designates 192.30.252.200 as permitted sender) smtp.mailfrom=noreply@github.com;\n" +
    "       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=github.com\n" +
    "Received: from github.com (hubbernetes-node-ca82a3e.va3-iad.github.net [10.48.113.52])\n" +
    "\tby smtp.github.com (Postfix) with ESMTPA id 6A67F5C03FA\n" +
    "\tfor <seomasterweb@gmail.com>; Fri,  5 Feb 2021 00:43:13 -0800 (PST)\n" +
    "DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=github.com;\n" +
    "\ts=pf2014; t=1612514593;\n" +
    "\tbh=0uA4p1NRKG/QhsQaSakM00zSCk+xkm/ax2YoyJlnSlM=;\n" +
    "\th=Date:From:Reply-To:To:Cc:Subject:List-ID:List-Archive:List-Post:\n" +
    "\t List-Unsubscribe:From;\n" +
    "\tb=iqLTObwip5sqYEZLVif4QPDOYaWYgiKDApHfJlEMw/qMZLmS0/y6AnyeM8KzXJAW9\n" +
    "\t xsEIbzIcZZxAT9Y5AQ1LhWdK1C17L4nfZxhZBvRme7ENusR02oGfoH927OIdo/QUeD\n" +
    "\t FlRY/Mee0OJMzpRmH+nKm6FBVCYSb9UYwJ8Ze1kg=\n" +
    "Date: Fri, 05 Feb 2021 00:43:13 -0800\n" +
    "From: vlad0k <notifications@github.com>\n" +
    "Reply-To: brocoders/vbbc-frontend-app <reply+AAIK3MG5BMI24Q2EB4A2OR56FDTCDEVBNHHC7TI6RA@reply.github.com>\n" +
    "To: brocoders/vbbc-frontend-app <vbbc-frontend-app@noreply.github.com>\n" +
    "Cc: test <test@noreply.github.com>\n" +
    "Message-ID: <brocoders/vbbc-frontend-app/pull/438@github.com>\n" +
    "Subject: [brocoders/vbbc-frontend-app] Feature/org passport form (#438)\n" +
    "Mime-Version: 1.0\n" +
    "Content-Type: multipart/alternative;\n" +
    ' boundary="--==_mimepart_601d052167c83_551a0450327d";\n' +
    " charset=UTF-8\n" +
    "Content-Transfer-Encoding: 7bit\n" +
    "Precedence: list\n" +
    "X-GitHub-Sender: vlad0k\n" +
    "X-GitHub-Recipient: quarryman\n" +
    "X-GitHub-Reason: test\n" +
    "List-ID: brocoders/vbbc-frontend-app <vbbc-frontend-app.brocoders.github.com>\n" +
    "List-Archive: https://github.com/brocoders/vbbc-frontend-app\n" +
    "List-Post: <mailto:reply+AAIK3MG5BMI24Q2EB4A2OR56FDTCDEVBNHHC7TI6RA@reply.github.com>\n" +
    "List-Unsubscribe: <mailto:unsub+AAIK3MG5BMI24Q2EB4A2OR56FDTCDEVBNHHC7TI6RA@reply.github.com>,\n" +
    " <https://github.com/notifications/unsubscribe/AAIK3MDCM4PZ653AUFL2RALS5OVSDANCNFSM4XELR6VQ>\n" +
    "X-Auto-Response-Suppress: All\n" +
    "X-GitHub-Recipient-Address: seomasterweb@gmail.com\n" +
    "\n" +
    "\n" +
    "----==_mimepart_601d052167c83_551a0450327d\n" +
    "Content-Type: text/plain;\n" +
    " charset=UTF-8\n" +
    "Content-Transfer-Encoding: 7bit\n" +
    "\n" +
    "\n" +
    "You can view, comment on, or merge this pull request online at:\n" +
    "\n" +
    "  https://github.com/brocoders/vbbc-frontend-app/pull/438\n" +
    "\n" +
    "-- Commit Summary --\n" +
    "\n" +
    "  * feture: org passport form new fields\n" +
    "  * feture: org passport form new fields\n" +
    "  * Merge branch &#39;feature/org-passport-form&#39; of https://github.com/brocoders/vbbc-frontend-app into feature/org-passport-form\n" +
    "\n" +
    "-- File Changes --\n" +
    "\n" +
    "    M src/components/Menu/components/Cube.tsx (1)\n" +
    "    M src/lib/http/ApiClient.ts (1)\n" +
    "    A src/pages/admin/organization/details/orgPassport/components/OrgPassportFormAutocomplete.tsx (124)\n" +
    "    M src/pages/admin/organization/details/orgPassport/form.tsx (246)\n" +
    "    M src/pages/admin/organization/details/orgPassport/formSerializer.ts (48)\n" +
    "    M src/pages/admin/organization/details/orgPassport/index.tsx (98)\n" +
    "    M src/store/admin/reducer.ts (10)\n" +
    "    M src/store/admin/sagas.ts (9)\n" +
    "    A src/store/entities/admin/orgPassportOptions/config.ts (94)\n" +
    "    A src/store/entities/admin/orgPassportOptions/index.ts (83)\n" +
    "\n" +
    "-- Patch Links --\n" +
    "\n" +
    "https://github.com/brocoders/vbbc-frontend-app/pull/438.patch\n" +
    "https://github.com/brocoders/vbbc-frontend-app/pull/438.diff\n" +
    "\n" +
    "-- \n" +
    "You are receiving this because you are test to this thread.\n" +
    "Reply to this email directly or view it on GitHub:\n" +
    "https://github.com/brocoders/vbbc-frontend-app/pull/438\n" +
    "\n" +
    "----==_mimepart_601d052167c83_551a0450327d\n" +
    "Content-Type: text/html;\n" +
    " charset=UTF-8\n" +
    "Content-Transfer-Encoding: 7bit\n" +
    "\n" +
    "\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<h4>You can view, comment on, or merge this pull request online at:</h4>\n" +
    "<p>&nbsp;&nbsp;<a href='https://github.com/brocoders/vbbc-frontend-app/pull/438'>https://github.com/brocoders/vbbc-frontend-app/pull/438</a></p>\n" +
    "\n" +
    "<h4>Commit Summary</h4>\n" +
    "<ul>\n" +
    "  <li>feture: org passport form new fields</li>\n" +
    "  <li>feture: org passport form new fields</li>\n" +
    "  <li>Merge branch &#39;feature/org-passport-form&#39; of https://github.com/brocoders/vbbc-frontend-app into feature/org-passport-form</li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>File Changes</h4>\n" +
    "<ul>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-8544b2d338406362d1e6094b1e8cdf487c7eea387ba8cfbd3273afe2c2a99179">src/components/Menu/components/Cube.tsx</a>\n' +
    "    (1)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-541a0b167120824eb7f9d18e721dd4a32545f76e7d492b83a7d34d495f86899e">src/lib/http/ApiClient.ts</a>\n' +
    "    (1)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>A</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-4d9202a01d0fcff2a6c876840188599b960a440a784d9fec102ab79191f2985d">src/pages/admin/organization/details/orgPassport/components/OrgPassportFormAutocomplete.tsx</a>\n' +
    "    (124)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-6ad5006a1b56bb1ebec01f6afa7ce0712ce23faa3c0aa534f6e744c2f8188fae">src/pages/admin/organization/details/orgPassport/form.tsx</a>\n' +
    "    (246)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-f03f59dbed896b431f1c5a986a2b66ec771a1a7179d17142fbc338c9def85928">src/pages/admin/organization/details/orgPassport/formSerializer.ts</a>\n' +
    "    (48)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-02af9314a66309bc70d4e2e3cc134f3162a4f1ffd0484f1529b36baf93d3feb2">src/pages/admin/organization/details/orgPassport/index.tsx</a>\n' +
    "    (98)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-4a03178dc43ceebc3ee4db783d6fbd20b76991d1a44d90cd451c46e175c5f780">src/store/admin/reducer.ts</a>\n' +
    "    (10)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>M</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-fbb0fb830398146972450607967e34b9e107788f939e2363d24c693b61115159">src/store/admin/sagas.ts</a>\n' +
    "    (9)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>A</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-c460e66718e3f62d9a718d644060e1386d7ad21269b7ccc2c48bdfda1e4fae55">src/store/entities/admin/orgPassportOptions/config.ts</a>\n' +
    "    (94)\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <strong>A</strong>\n" +
    '    <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438/files#diff-502e57a0dd60a6f3217c94bb192e65166e2ccd0e51fb4f6b196768ea2ea0671c">src/store/entities/admin/orgPassportOptions/index.ts</a>\n' +
    "    (83)\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<h4>Patch Links:</h4>\n" +
    "<ul>\n" +
    "  <li><a href='https://github.com/brocoders/vbbc-frontend-app/pull/438.patch'>https://github.com/brocoders/vbbc-frontend-app/pull/438.patch</a></li>\n" +
    "  <li><a href='https://github.com/brocoders/vbbc-frontend-app/pull/438.diff'>https://github.com/brocoders/vbbc-frontend-app/pull/438.diff</a></li>\n" +
    "</ul>\n" +
    "\n" +
    '<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are test to this thread.<br />Reply to this email directly, <a href="https://github.com/brocoders/vbbc-frontend-app/pull/438">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AAIK3MDTGBLYV4PA2KNVJRDS5OVSDANCNFSM4XELR6VQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AAIK3MADWNMT7Q3Q3KEBNFDS5OVSDA5CNFSM4XELR6V2YY3PNVWWK3TUL52HS4DFUVEXG43VMWVGG33NNVSW45C7NFSM4L6ND2EA.gif" height="1" width="1" alt="" /></p>\n' +
    '<script type="application/ld+json">[\n' +
    "{\n" +
    '"@context": "http://schema.org",\n' +
    '"@type": "EmailMessage",\n' +
    '"potentialAction": {\n' +
    '"@type": "ViewAction",\n' +
    '"target": "https://github.com/brocoders/vbbc-frontend-app/pull/438",\n' +
    '"url": "https://github.com/brocoders/vbbc-frontend-app/pull/438",\n' +
    '"name": "View Pull Request"\n' +
    "},\n" +
    '"description": "View this Pull Request on GitHub",\n' +
    '"publisher": {\n' +
    '"@type": "Organization",\n' +
    '"name": "GitHub",\n' +
    '"url": "https://github.com"\n' +
    "}\n" +
    "}\n" +
    "]</script>\n" +
    "\n" +
    "----==_mimepart_601d052167c83_551a0450327d--",
  /////////////////////
  "Delivered-To: magic.loctary@gmail.com\n" +
    "Received: by 2002:a02:946d:0:0:0:0:0 with SMTP id a100csp2758381jai;\n" +
    "        Sun, 24 Jan 2021 04:25:19 -0800 (PST)\n" +
    "X-Google-Smtp-Source: ABdhPJxxothudUQfqDAaV5mBigSq58T2HXkbTyVO49yc5C5cG3610+3d8XMno7BWXnm75WloPRnY\n" +
    "X-Received: by 2002:a63:f011:: with SMTP id k17mr1503939pgh.227.1611491119230;\n" +
    "        Sun, 24 Jan 2021 04:25:19 -0800 (PST)\n" +
    "ARC-Seal: i=1; a=rsa-sha256; t=1611491119; cv=none;\n" +
    "        d=google.com; s=arc-20160816;\n" +
    "        b=aVHCfrjT3DQ9sDo6v3H7cZzQTHjYl3j12WDf+sibiGoU49+XN+KWxvTPE4beJaoY0V\n" +
    "         Dxwro6gEK753NbJL1FJWZJqUIi+dnDxVEYIV5js2Lm2fucn0rfPFWxjVDanDE0MsjhMC\n" +
    "         qYWVWwqMQ00hoxurDwG/0ENoQt9D7Oh2OqoaDdX7Hejjh5ykRWr65v1zyp5+Di16hWQS\n" +
    "         WbG6/5gQSGpDhEVnZXIFpCRapmxyK5dRBta/EbOadnk6sx5xbVKHX/9rBSAAxznBLIyR\n" +
    "         w7YLQo+7jv4oHa0w3uwgH7fDr+8bb3iZUiX6LLZ5U0WhXUipqM4MKMsNt3k5/3XXZquH\n" +
    "         IFWQ==\n" +
    "ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\n" +
    "        h=dkim-signature:auto-submitted:content-transfer-encoding\n" +
    "         :mime-version:subject:references:in-reply-to:message-id:to:reply-to\n" +
    "         :from:date;\n" +
    "        bh=f8jin4T6rhK8J8El5UwvQjxAk7sLdErz9HKk3dFbUns=;\n" +
    "        b=QrxHxzfWmoNOxXl7LgYlfPQ7I/knHxTkmvdXRt9qom4K8Alv36fVOdr6Jo0wJXvieh\n" +
    "         aSKvMCQGbzBgr0YLs2NWQYY3MNGG0HwcgZrldY1QzsCFO5ocKyL9VGhsyjOFP5j9ynia\n" +
    "         IGFPXmy3syYuee3xm2vRbKT4fVUOp39KWZRELISCXXFSObneCTHhICSwqrnPeYY3VuKO\n" +
    "         NUMptVyyi5lf0fk+LdBt1RGR+61TJSXpEzUm+uuDJUCz+Rvj/K0l97rndAnk+v5wcOhj\n" +
    "         ETGyq/zKBPoZU6bzDxMZlgbabTt+3SglkdqIFXmInSC0vkOnMVtK+Cz0kBh2tqTSlyfG\n" +
    "         sSYw==\n" +
    "ARC-Authentication-Results: i=1; mx.google.com;\n" +
    "       dkim=pass header.i=@zendesk.com header.s=zendesk2 header.b=DApk5LYI;\n" +
    "       spf=pass (google.com: domain of help@zumiez.com designates 192.161.151.31 as permitted sender) smtp.mailfrom=help@zumiez.com;\n" +
    "       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=zumiez.com\n" +
    "Return-Path: <help@zumiez.com>\n" +
    "Received: from outbyoip1.pod20.usw2.zdsys.com (outbyoip1.pod20.usw2.zdsys.com. [192.161.151.31])\n" +
    "        by mx.google.com with ESMTPS id t6si15261877pgb.496.2021.01.24.04.25.19\n" +
    "        for <magic.loctary@gmail.com>\n" +
    "        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);\n" +
    "        Sun, 24 Jan 2021 04:25:19 -0800 (PST)\n" +
    "Received-SPF: pass (google.com: domain of help@zumiez.com designates 192.161.151.31 as permitted sender) client-ip=192.161.151.31;\n" +
    "Authentication-Results: mx.google.com;\n" +
    "       dkim=pass header.i=@zendesk.com header.s=zendesk2 header.b=DApk5LYI;\n" +
    "       spf=pass (google.com: domain of help@zumiez.com designates 192.161.151.31 as permitted sender) smtp.mailfrom=help@zumiez.com;\n" +
    "       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=zumiez.com\n" +
    "Received: from zendesk.com (unknown [10.219.91.31])\n" +
    "\tby outbyoip1.pod20.usw2.zdsys.com (Postfix) with ESMTP id 4DNsdp6rT9z14K2m\n" +
    "\tfor <magic.loctary@gmail.com>; Sun, 24 Jan 2021 12:25:18 +0000 (UTC)\n" +
    "Date: Sun, 24 Jan 2021 12:25:18 +0000\n" +
    "From: Zumiez <help@zumiez.com>\n" +
    "Reply-To: Zumiez <help@zumiez.com>\n" +
    "To: Vasyl Butov <magic.loctary@gmail.com>\n" +
    "Message-ID: <ERX5X6LG25_600d672eb8ebc_5f7885ac2656930_sprut@zendesk.com>\n" +
    "In-Reply-To: <CADnumYfCoJGPT4xfZHuB5iuZAWTXm_WQNjLrKjHmb7rYi6V4Yw@mail.gmail.com>\n" +
    "References: <ERX5X6LG25@zendesk.com>\n" +
    " <CADnumYfCoJGPT4xfZHuB5iuZAWTXm_WQNjLrKjHmb7rYi6V4Yw@mail.gmail.com>\n" +
    "Subject: Your email was received: Stock\n" +
    "Mime-Version: 1.0\n" +
    "Content-Type: multipart/alternative;\n" +
    ' boundary="--==_mimepart_600d672ee6bf8_5f7885ac26570e2";\n' +
    " charset=utf-8\n" +
    "Content-Transfer-Encoding: 7bit\n" +
    "X-Delivery-Context: event-id-1377581419331\n" +
    "Auto-Submitted: auto-generated\n" +
    "X-Auto-Response-Suppress: All\n" +
    "X-Mailer: Zendesk Mailer\n" +
    "X-Zendesk-From-Account-Id: 5262c15\n" +
    "DKIM-Signature:  v=1; a=rsa-sha256; c=relaxed/relaxed; d=zendesk.com;\n" +
    " q=dns/txt; s=zendesk2; t=1611491118;\n" +
    " bh=f8jin4T6rhK8J8El5UwvQjxAk7sLdErz9HKk3dFbUns=;\n" +
    " h=date:from:reply-to:to:message-id:in-reply-to:references:subject:mime-version:content-type:content-transfer-encoding;\n" +
    " b=DApk5LYI4ELnLxkeeF4MWUgr3d1SWWuIIe3zemPs82Gxi40a3v8XH5OQ9//0YS+uOyYryET1eg6F6bO5LupL3fu9jObG/pgNhktlQ+QfA5JudbR7rokeTunbDn4S/10Zkhxe3h6bXpWsV/a0irRwmweOS643Gw5DSFZJlEEUTQvFfIMnEaGyDCPz76boJ0z/T7AZWyONTpzpFB0UpQ1eo/x6a9W5tmonf3XUE5x61Hc7mj6R1Mn32TUHpXycd/k9wMlyeGnieT644wQlbd5WGNXQAAhrXMuURcTEx0tAZKfP6S5NpzhIDIc2jTq1l8Yeubrbi+05CB7uY4xkZIrEVA==\n" +
    "\n" +
    "\n" +
    "----==_mimepart_600d672ee6bf8_5f7885ac26570e2\n" +
    "Content-Type: text/plain;\n" +
    " charset=utf-8\n" +
    "Content-Transfer-Encoding: quoted-printable\n" +
    "\n" +
    "##- Please type your reply above this line -##\n" +
    "\n" +
    "\n" +
    "\n" +
    "Hello Vasyl,\n" +
    "\n" +
    "Thank you for contacting us! Our office is currently closed. We will begi=\n" +
    "n responding to emails when our office reopens and will get to your quest=\n" +
    "ion as soon as possible.\n" +
    "\n" +
    "Our normal business hours are 6am-7pm PT M-F, and 8am-3pm on Saturdays.\n" +
    "\n" +
    "Thank you,\n" +
    "Zumiez Customer Care\n" +
    "\n" +
    "\n" +
    "\n" +
    "--------------------------------\n" +
    "This email is a service from Zumiez.\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "[ERX5X6-LG25]=\n" +
    "\n" +
    "----==_mimepart_600d672ee6bf8_5f7885ac26570e2\n" +
    "Content-Type: text/html;\n" +
    " charset=utf-8\n" +
    "Content-Transfer-Encoding: quoted-printable\n" +
    "\n" +
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://ww=\n' +
    'w.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
    '<html xmlns=3D"http://www.w3.org/1999/xhtml"><head>\n' +
    '  <meta http-equiv=3D"Content-Type" content=3D"text/html; charset=3Dutf-8=\n' +
    '" />\n' +
    '  <style type=3D"text/css">\n' +
    "    table td {\n" +
    "      border-collapse: collapse;\n" +
    "    }\n" +
    "    body[dir=3Drtl] .directional_text_wrapper { direction: rtl; unicode-b=\n" +
    "idi: embed; }\n" +
    "\n" +
    "  </style>\n" +
    "</head>\n" +
    '<body lang=3D"en-us" style=3D"width: 100%!important; margin: 0; padding: =\n' +
    '0;" xml:lang=3D"en-us">\n' +
    "  <div style=3D\"padding: 10px ; line-height: 18px; font-family: 'Lucida G=\n" +
    "rande',Verdana,Arial,sans-serif; font-size: 12px; color:#444444;\">\n" +
    '    <div style=3D"color: #FFFFFF;">##- Please type your reply above this =\n' +
    "line -##</div>\n" +
    '    <p dir=3D"ltr"></p><p dir=3D"ltr">Hello Vasyl,</p><p dir=3D"ltr">Than=\n' +
    "k you for contacting us! Our office is currently closed. We will begin re=\n" +
    "sponding to emails when our office reopens and will get to your question =\n" +
    'as soon as possible.</p><p dir=3D"ltr">Our normal business hours are 6am-=\n' +
    '7pm PT M-F, and 8am-3pm on Saturdays.</p><p dir=3D"ltr">Thank you,<br />Z=\n' +
    "umiez Customer Care</p>\n" +
    "    =\n" +
    "\n" +
    "  </div>\n" +
    '<span style=3D"color:#FFFFFF" aria-hidden=3D"true">[ERX5X6-LG25]</span>\n' +
    "\n" +
    "</body></html>\n" +
    "\n" +
    "----==_mimepart_600d672ee6bf8_5f7885ac26570e2--\n",
  //////////////
  "Delivered-To: vasyl.butov@brocoders.team\n" +
    "Received: by 2002:a5d:9d57:0:0:0:0:0 with SMTP id k23csp2093303iok;\n" +
    "        Fri, 5 Feb 2021 04:34:57 -0800 (PST)\n" +
    "X-Received: by 2002:a05:6602:154e:: with SMTP id h14mr3826005iow.1.1612528497348;\n" +
    "        Fri, 05 Feb 2021 04:34:57 -0800 (PST)\n" +
    "ARC-Seal: i=1; a=rsa-sha256; t=1612528497; cv=none;\n" +
    "        d=google.com; s=arc-20160816;\n" +
    "        b=rtgjuayeOeuVXAAIYl0eRYCc8/tTKDrU4weDNIXfWDTEY4J2Q8n8NfDtGu87FA24tj\n" +
    "         iBx87OxJVHmq+jWGzNKrBVXTap003Y4cb8zOp0x55jK1f/UAIJE+oTiZCVUA/rMi18pB\n" +
    "         NKMdStbD7ksWsObo+FkhI+YZlUf0xVZhXc7Msr53v/ksLdMFLh2VYWCt97HFXc4Eck7L\n" +
    "         DJPz1Ki0jCTqnvvczMUeGl/s3WIN9FX8VCOgweWdqoMwMw+O0oJWrIAbNlDeHdq1A3ow\n" +
    "         aOEQU4+BJfFkwtcX3bMCLygNL6cnzhQabpA7r8XSekRkElPZXbzVl5sOzoo2XYTCINDO\n" +
    "         lI2Q==\n" +
    "ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\n" +
    "        h=to:subject:message-id:date:from:in-reply-to:references:mime-version\n" +
    "         :dkim-signature;\n" +
    "        bh=OkGUK+ieJQBznqWaXpEvfVAIAP6bNr8CwyGESM7Jtnk=;\n" +
    "        b=mzhZg9s8o6qa8lAtmaL91EfvYoddJAGusYXFAU9OTN0HtQbeQ0H09wVOZ8+QF8RMxz\n" +
    "         SwqXpoZKYYBY/DPjug7InY1+5ySbWlX4a0WLk62B0o1qfpqfE0f0838PcNG28Ri9Bgjx\n" +
    "         w6Wo5Zt3zqRbrnHFVqvbP321FSWPzX6hs1XLMGlOZtK+In2SmbRMDSf2FS7QixeMfHWd\n" +
    "         tNnaIKb9LIapHmmeoJD/kcy50i12aWU2hh35BEa7A3aA9iFqm21LSgtHtkF1TXMXTjgb\n" +
    "         oJ3ZdNP5qH8IOT3gh7sOxvf6VvVUKkzEI9S1vtSUT1oFB4Pjeww+iA9pSTt2fSZEMfOp\n" +
    "         Wckw==\n" +
    "ARC-Authentication-Results: i=1; mx.google.com;\n" +
    "       dkim=pass header.i=@gmail.com header.s=20161025 header.b=OCLmGa6y;\n" +
    "       spf=pass (google.com: domain of magic.loctary@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=magic.loctary@gmail.com;\n" +
    "       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com\n" +
    "Return-Path: <magic.loctary@gmail.com>\n" +
    "Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\n" +
    "        by mx.google.com with SMTPS id n17sor5424637iob.1.2021.02.05.04.34.57\n" +
    "        for <vasyl.butov@brocoders.team>\n" +
    "        (Google Transport Security);\n" +
    "        Fri, 05 Feb 2021 04:34:57 -0800 (PST)\n" +
    "Received-SPF: pass (google.com: domain of magic.loctary@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;\n" +
    "Authentication-Results: mx.google.com;\n" +
    "       dkim=pass header.i=@gmail.com header.s=20161025 header.b=OCLmGa6y;\n" +
    "       spf=pass (google.com: domain of magic.loctary@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=magic.loctary@gmail.com;\n" +
    "       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com\n" +
    "DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\n" +
    "        d=gmail.com; s=20161025;\n" +
    "        h=mime-version:references:in-reply-to:from:date:message-id:subject:to;\n" +
    "        bh=OkGUK+ieJQBznqWaXpEvfVAIAP6bNr8CwyGESM7Jtnk=;\n" +
    "        b=OCLmGa6yOBADK6ZDLraX4A4XdKjVWAqsYHa3T4UVlwab4lE2tAOF6LMijwHAYmzoDs\n" +
    "         I+woQYxiKsjRjBSbyk/+ZPaQOMs01629eJ+wKYF2iEI9fLaaMllFGBVrcT6Qwr+5c4to\n" +
    "         FXbk1VdkWCRqXEUSepuUM+M5McHPQEnaqJfUg0FfyYTXZk7Vj9ne2JYLNE7IdUMc6Csk\n" +
    "         +2xw1d5hcN4lJsQsBFE30Qgi5NZFZruofk+YXdjHI5c43dOdXGiSvL+MN8+vuQsVxVz4\n" +
    "         Y/IGzDMBjM2iqlk9zRWuIaIrUX+oOZkHm+o3UxMFTf5CIz7jkXW6O4dvgaQQKyXVDVK3\n" +
    "         QSMQ==\n" +
    "X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\n" +
    "        d=1e100.net; s=20161025;\n" +
    "        h=x-gm-message-state:mime-version:references:in-reply-to:from:date\n" +
    "         :message-id:subject:to;\n" +
    "        bh=OkGUK+ieJQBznqWaXpEvfVAIAP6bNr8CwyGESM7Jtnk=;\n" +
    "        b=Z52wP3DKzBOINPDf9I4ol2+BwvqWonSNNU+srFkI5mIlG/XOCR/xd47WeiEtTSpr3B\n" +
    "         sfgRZlCY0f9H3rfUkoNUVXUEdh7qgQ2zU1lX7oEeY6vCb/ONGBkP69HwLnihRnoKn2eA\n" +
    "         O+wDp2gIzn5V4myGYZhjIbLW3Ba6W/RRRHH3YjiEZ/TW5ppu2gujG/Sm81a5l9xpaY1U\n" +
    "         WMDI93ApH6wYu/cx3OD1kzceKApn01qPBr19c0yEUDy0KWTwWSNkotbs4DrxM1xuOK9w\n" +
    "         vQgFuluAnqQQUPCObti0yDI6HX9r7ioVE+XJdNsQyHC4e3xQsjATl8p7kNa//B9DrbLx\n" +
    "         6fZA==\n" +
    "X-Gm-Message-State: AOAM531AA5tDlCKfpjJgwsDMMJDxOMdXYKf8fOfxNN1FyEPRS4bWaS/h\n" +
    "\tgOjf99ZBTeDQEl/bytNPxYic7iOLY+gGvGgxeXsRsTbz\n" +
    "X-Google-Smtp-Source: ABdhPJyct0cdO6bap4kv1sKhaOPdmFYUaRddQ1pTMSpLXbnzu6X6EPBhTz54wszBD/Ok8rFbvyzrJVawaOaq+3SwYsg=\n" +
    "X-Received: by 2002:a05:6602:106:: with SMTP id s6mr3775438iot.17.1612528496939;\n" +
    " Fri, 05 Feb 2021 04:34:56 -0800 (PST)\n" +
    "MIME-Version: 1.0\n" +
    "References: <CADnumYcF4QagoEKfZBXc0r9Y2j6WEh1XiQntENjTD8JoVQCF8w@mail.gmail.com>\n" +
    " <CADkv5hMDvVhMoDa9237DOhSMr8Oh7XaM+3-M-ubspME9Q9W68A@mail.gmail.com>\n" +
    "In-Reply-To: <CADkv5hMDvVhMoDa9237DOhSMr8Oh7XaM+3-M-ubspME9Q9W68A@mail.gmail.com>\n" +
    "From: Vasyl Butov <magic.loctary@gmail.com>\n" +
    "Date: Fri, 5 Feb 2021 14:34:45 +0200\n" +
    "Message-ID: <CADnumYfJzZsm1qc4usuimN9w3yarfY3iQ+F92OevA_Gg-oEUcQ@mail.gmail.com>\n" +
    "Subject: Re: test1\n" +
    "To: Vasyl Butov <vasyl.butov@brocoders.team>\n" +
    'Content-Type: multipart/alternative; boundary="0000000000004016e705ba960ca0"\n' +
    "\n" +
    "--0000000000004016e705ba960ca0\n" +
    'Content-Type: text/plain; charset="UTF-8"\n' +
    "\n" +
    "Great, thanks for letting me know.\n" +
    "\n" +
    "Final message\n" +
    "\n" +
    "On Fri, 5 Feb 2021 at 14:34, Vasyl Butov <vasyl.butov@brocoders.team> wrote:\n" +
    "\n" +
    "> Hi, I got it.\n" +
    ">  This is nulti-line mess #2\n" +
    ">\n" +
    "> On Fri, Feb 5, 2021 at 2:27 PM Vasyl Butov <magic.loctary@gmail.com>\n" +
    "> wrote:\n" +
    ">\n" +
    ">> this is beggining of 1st test message\n" +
    ">>\n" +
    ">\n" +
    "\n" +
    "--0000000000004016e705ba960ca0\n" +
    'Content-Type: text/html; charset="UTF-8"\n' +
    "Content-Transfer-Encoding: quoted-printable\n" +
    "\n" +
    '<div dir=3D"ltr">Great, thanks for letting me know.=C2=A0<br><div><br></div=\n' +
    '><div>Final message</div></div><br><div class=3D"gmail_quote"><div dir=3D"l=\n' +
    'tr" class=3D"gmail_attr">On Fri, 5 Feb 2021 at 14:34, Vasyl Butov &lt;vasyl=\n' +
    '.butov@brocoders.team&gt; wrote:<br></div><blockquote class=3D"gmail_quote"=\n' +
    ' style=3D"margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);p=\n' +
    'adding-left:1ex"><div dir=3D"ltr">Hi, I got it.<br><div>=C2=A0This is nulti=\n' +
    '-line=C2=A0mess #2</div></div><br><div class=3D"gmail_quote"><div dir=3D"lt=\n' +
    'r" class=3D"gmail_attr">On Fri, Feb 5, 2021 at 2:27 PM Vasyl Butov &lt;<a h=\n' +
    'ref=3D"mailto:magic.loctary@gmail.com" target=3D"_blank">magic.loctary@gmai=\n' +
    'l.com</a>&gt; wrote:<br></div><blockquote class=3D"gmail_quote" style=3D"ma=\n' +
    "rgin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:=\n" +
    '1ex"><div dir=3D"ltr">this is beggining=C2=A0of 1st test message</div>\n' +
    "</blockquote></div>\n" +
    "</blockquote></div>\n" +
    "\n" +
    "--0000000000004016e705ba960ca0--\n"
];
