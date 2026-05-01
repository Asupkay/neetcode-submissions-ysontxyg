class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const emailMap = new Map();
        const res = [];
        for (let j = 0; j < accounts.length; j++) {
            const [name, ...emails] = accounts[j];
            let match = -1;
            for (let i = 0; i < emails.length; i++) {
                const cEmail = emails[i];
                if (emailMap.get(cEmail) !== undefined) {
                    match = emailMap.get(cEmail);
                }
            }

            if (match !== -1) {
                let p1 = 1;
                let p2 = 0;
                const newEmails = [];
                while (p1 <= res[match].length - 1 || p2 <= emails.length - 1) {
                    console.log(p1, p2, res[match], emails)
                    if (p1 >= res[match].length) {
                        newEmails.push(emails[p2]);
                        p2++;
                        continue;
                    }
                    if (p2 >= emails.length) {
                        newEmails.push(res[match][p1]);
                        p1++;
                        continue;
                    }

                    const email1 = res[match][p1];
                    const email2 = emails[p2];
                    console.log(email1, email2)

                    if (email1 === email2) {
                        newEmails.push(email1);
                        p1++;
                        p2++;
                        continue;
                    }
                    if (email1.localeCompare(email2) < 0) {
                        newEmails.push(email1);
                        p1++;
                        continue;
                    } else {
                        newEmails.push(email2);
                        p2++;
                        continue;
                    } 
                }
                res[match] = [name, ...newEmails]
            } else {
                const newEmails = [name]
                for (let i = 0; i < emails.length; i++) {
                    if (emailMap.get(emails[i]) === undefined) {
                        newEmails.push(emails[i]);
                    }
                    emailMap.set(emails[i], res.length)
                }
                res.push(newEmails)
            }
        }
        return res;
    }
}
